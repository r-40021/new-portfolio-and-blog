const search = document.querySelector('.search-input')
const suggestions = document.querySelector('.search-suggestions')
const background = document.querySelector('.search-background')

function hideSuggestions(e) {
  var isClickInsideElement = suggestions.contains(e.target);

  if (!isClickInsideElement) {
    suggestions.classList.add('d-none')
    if (background !== null) {
      background.style.setProperty('--image-opacity', '0.1')
    }
  }
}

/*
Source:
  - https://raw.githubusercontent.com/h-enk/doks/master/assets/js/index.js
*/
function inputFocus(e) {
  if (e.ctrlKey && e.key === '/') {
    e.preventDefault();
    search.focus();
  }
  if (e.key === 'Escape') {
    search.blur();
    suggestions.classList.add('d-none');
  }
}

/*
Source:
  - https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3
*/
function suggestionFocus(e) {
  const suggestionsHidden = suggestions.classList.contains('d-none');
  if (suggestionsHidden) return;

  const focusableSuggestions = [...suggestions.querySelectorAll('a')];
  if (focusableSuggestions.length === 0) return;

  const index = focusableSuggestions.indexOf(document.activeElement);

  if (e.key === "ArrowUp") {
    e.preventDefault();
    const nextIndex = index > 0 ? index - 1 : 0;
    focusableSuggestions[nextIndex].focus();
  }
  else if (e.key === "ArrowDown") {
    e.preventDefault();
    const nextIndex = index + 1 < focusableSuggestions.length ? index + 1 : index;
    focusableSuggestions[nextIndex].focus();
  }
}

async function makeIndex() {
  const index = new FlexSearch.Document({
    tokenize: 'forward',
    cache: 100,
    document: {
      id: 'id',
      tag: 'tag',
      store: ['href', 'title', 'description'],
      index: ['title', 'description', 'content']
    }
  })

  // インデックスファイルを取得
  const js = await fetch('/search.js')
  if (!js.ok) return
  const txt = await js.text()
  const contents = trim(txt, 'const contents = ', '];') + ']'
  const json = JSON.parse(contents)

  // インデックスファイルをインデックスに追加
  json.forEach(page => {
    index.add(page)
  })

  /*
  Source:
    - https://github.com/nextapps-de/flexsearch#index-documents-field-search
    - https://raw.githack.com/nextapps-de/flexsearch/master/demo/autocomplete.html
  */
  const showResults = () => {
    const maxResult = 5;
    var searchQuery = this.value;
    // filter the results for the currently tagged language
    const lang = document.documentElement.lang;
    var results = null;
    if (searchQuery) {
      results = index.search(searchQuery, { index: ['title', 'description', 'content'], limit: maxResult, tag: lang, enrich: true });
      if (background !== null) {
        background.style.setProperty('--image-opacity', '0')
      }
    } else {
      if (background !== null) {
        background.style.setProperty('--image-opacity', '0.1')
      }
    }

    // flatten results since index.search() returns results for each indexed field
    const flatResults = new Map(); // keyed by href to dedupe results
    if (results !== null) {
      for (const result of results.flatMap(r => r.result)) {
        if (flatResults.has(result.doc.href)) continue;
        flatResults.set(result.doc.href, result.doc);
      }
    }

    suggestions.innerHTML = "";
    suggestions.classList.remove('d-none');

    // inform user that no results were found
    if (flatResults.size === 0 && searchQuery) {
      const msg = suggestions.dataset.noResults;
      const noResultsMessage = document.createElement('div')
      noResultsMessage.innerHTML = `${msg} "<strong>${searchQuery}</strong>"`
      noResultsMessage.classList.add("suggestion__no-results");
      suggestions.appendChild(noResultsMessage);
      return;
    }

    // construct a list of suggestions
    for (const [href, doc] of flatResults) {
      const entry = document.createElement('div');
      suggestions.appendChild(entry);

      const a = document.createElement('a');
      a.href = href;
      entry.appendChild(a);

      const title = document.createElement('span');
      title.classList.add('text-start');
      title.textContent = doc.title;
      title.classList.add("suggestion__title");
      a.appendChild(title);

      const description = document.createElement('span');
      description.textContent = doc.description;
      description.classList.add("suggestion__description");
      a.appendChild(description);

      suggestions.appendChild(entry);

      if (suggestions.childElementCount == maxResult) break;
    }
  }

  search.addEventListener('input', showResults, true)
}

search.addEventListener('focus', makeIndex, { once: true }) 

if (search !== null && suggestions !== null) {
  document.addEventListener('keydown', inputFocus);
  document.addEventListener('keydown', suggestionFocus);
  document.addEventListener('click', hideSuggestions);
}

const searchModal = document.getElementById('search-modal')
if (searchModal !== null) {
  searchModal.addEventListener('shown.bs.modal', function () {
    const searchInput = document.getElementById('search-input-modal')
    if (searchInput !== null) {
      searchInput.focus({ focusVisible: true })
    }
  })
}

// 指定の文字の間の文字列を切り取る
function trim(str, start, end) {
  const start_index = str.indexOf(start)
  if (start_index == -1) {
    return ''
  }
  const end_index = str.indexOf(end, start_index + start.length)
  if (end_index == -1) {
    return ''
  }
  return str.substring(start_index + start.length, end_index)
}