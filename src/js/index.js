// FontAwesome
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe, faArrowLeft, faArrowRight, faAngleDoubleLeft, faAngleDoubleRight, faEllipsis, faUpRightFromSquare, faSun, faMoon, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
// 各種 JS 読み込み
/* eslint-disable */
import { Dropdown } from 'bootstrap/js/dist/dropdown'
import { Collapse } from 'bootstrap/js/dist/collapse'
/* eslint-disable */
import './clipboard'
import './flexsearch'
import './link'
import './navbar'
import './popover'
import './theme'
import './toast'
import './tooltip'

library.add(faGlobe, faArrowLeft, faArrowRight, faAngleDoubleLeft, faAngleDoubleRight, faEllipsis, faUpRightFromSquare, faSun, faMoon, faCircleHalfStroke)
dom.i2svg()
