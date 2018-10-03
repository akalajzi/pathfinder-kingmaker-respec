import _ from "lodash"
import characterNames from "./consts";

export function getCharacterName(descriptor) {
    if (descriptor.CustomName.length) {
        return descriptor.CustomName
    }
    return characterNames[descriptor.Blueprint] || descriptor.Blueprint
}

export function getLoadingEl() {
    return document.getElementById("loading")
}

export function showLoadingEl() {
    const el = getLoadingEl()
    if (el) {
        el.style.display = "list-item"
    }
}

export function removeLoadingEl() {
    const loadingEl = getLoadingEl()
    if (!loadingEl) {
        return
    }
    loadingEl.parentNode.removeChild(loadingEl)
}

export function injectParty(party) {
    removeLoadingEl()
    const wrapper = document.getElementsByClassName("party-list")[0]
    _.forEach(party, (character, id) => {
        const className = character.shouldRespec ? "selected" : "";
        wrapper.innerHTML += `<li id="${id}" class="${className}" onclick="toggleSelection('${id}')">${character.name}</li>`
    })
}

export function toggleSelectedElById(id) {
    const el = document.getElementById(id);
    const className = window.party[id].shouldRespec ? "selected" : "";
    el.setAttribute("class", className);
}
