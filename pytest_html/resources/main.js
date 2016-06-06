/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

function toArray(iter) {
    if (iter === null) {
        return null;
    }
    return Array.prototype.slice.call(iter);
}

function find(selector, elem) {
    if (!elem) {
        elem = document;
    }
    return elem.querySelector(selector);
}

function find_all(selector, elem) {
    if (!elem) {
        elem = document;
    }
    return toArray(elem.querySelectorAll(selector));
}

addEventListener("DOMContentLoaded", function() {
    find_all('.col-links a.image').forEach(function(elem) {
        elem.addEventListener("click",
                              function(event) {
                                  var node = elem;
                                  while (node && !node.classList.contains('results-table-row')) {
                                      node = node.parentNode;
                                  }
                                  if (node != null) {
                                      if (node.nextSibling &&
                                          node.nextSibling.classList.contains("extra")) {
                                          var href = find('.image img', node.nextSibling).src;
                                          window.open(href);
                                      }
                                  }
                                  event.preventDefault();
                              }, false)
    });

    find_all('.image a').forEach(function(elem) {
        elem.addEventListener("click",
                              function(event) {
                                  window.open(find('img', elem).getAttribute('src'));
                                  event.preventDefault();
                              }, false)
    });

    find_all('.collapse-controller').forEach(function(elem) {
        elem.addEventListener("click",
                              function(event) {
                                elem.nextElementSibling.classList.toggle('collapsed');
                              }, false)
    });

});
