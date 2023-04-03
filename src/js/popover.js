import { Popover } from 'bootstrap/js/dist/popover'

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// eslint-disable-next-line no-undef, no-unused-vars
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl))
