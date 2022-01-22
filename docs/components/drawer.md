<!-- <div class="drawer-widget" data-drawer-trigger aria-controls="drawer-name" aria-expanded="false">
  Click to open
</div>


### Trigger
```html
<div class="drawer-widget" data-drawer-trigger aria-controls="drawer-name" aria-expanded="false">
  Click to open
</div>
```

<section class="drawer" id="drawer-name" data-drawer-target>
  <div class="drawer__overlay" data-drawer-close tabindex="-1"></div>
  <div class="drawer__wrapper">
    <div class="drawer__header">
      <div class="drawer__title">
        Site Navigation
      </div>
      <button class="drawer__close" data-drawer-close aria-label="Close Drawer"></button>
    </div>
    <div class="drawer__content">
      <ul class="drawer__list">
        <li class="drawer__list-item"><a href="/compare.html" class="drawer__link">Compare</a></li>
        <li class="drawer__list-item"><a href="/compare.html" class="drawer__link">Search</a></li>
        <li class="drawer__list-item"><a href="/compare.html" class="drawer__link">Result</a></li>
        <li class="drawer__list-item"><a href="/compare.html" class="drawer__link">Calculators</a></li>
      </ul>
    </div>
  </div>
</section>

### Drawer
```html
<section class="drawer" id="drawer-name" data-drawer-target>
  <div class="drawer__overlay" data-drawer-close tabindex="-1"></div>
  <div class="drawer__wrapper">
    <div class="drawer__header">
      <div class="drawer__title">
        Site Navigation
      </div>
      <button class="drawer__close" data-drawer-close aria-label="Close Drawer"></button>
    </div>
    <div class="drawer__content">
      <ul class="drawer__list">
        <li class="drawer__list-item"><a href="/compare.html" class="drawer__link">Compare</a></li>
        <li class="drawer__list-item"><a href="/compare.html" class="drawer__link">Search</a></li>
        <li class="drawer__list-item"><a href="/compare.html" class="drawer__link">Result</a></li>
        <li class="drawer__list-item"><a href="/compare.html" class="drawer__link">Calculators</a></li>
      </ul>
    </div>
  </div>
</section>
```


<style lang="scss">
.drawer {
  display: none;
}

.drawer__trigger {
  width: 50px;
  height: 38px;
  background-color: #273352;
  position: fixed;
  right: 0;
  top: 45%;
  transform: translate(-50%, -50%);
  display: block;
  cursor: pointer;
  border-radius: 20px 0px 0px 20px;
  text-align: center;
}

.drawer__trigger i {
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 0px;
  margin-top: 9px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.2845 7.5C13.2845 7.755 13.2614 7.995 13.2305 8.235L14.8574 9.4725C15.0039 9.585 15.0425 9.7875 14.9499 9.9525L13.4079 12.5475C13.3385 12.6675 13.2074 12.735 13.0763 12.735C13.0301 12.735 12.9838 12.7275 12.9375 12.7125L11.0176 11.9625C10.6167 12.255 10.1849 12.51 9.71459 12.6975L9.42159 14.685C9.39846 14.865 9.23654 15 9.04378 15H5.95962C5.76686 15 5.60495 14.865 5.58181 14.685L5.28882 12.6975C4.81848 12.51 4.3867 12.2625 3.98576 11.9625L2.06587 12.7125C2.02732 12.7275 1.98106 12.735 1.93479 12.735C1.79601 12.735 1.66493 12.6675 1.59554 12.5475L0.0534574 9.9525C-0.0390674 9.7875 -0.000515357 9.585 0.145982 9.4725L1.77288 8.235C1.74203 7.995 1.7189 7.7475 1.7189 7.5C1.7189 7.2525 1.74203 7.005 1.77288 6.765L0.145982 5.5275C-0.000515357 5.415 -0.0467778 5.2125 0.0534574 5.0475L1.59554 2.4525C1.66493 2.3325 1.79601 2.265 1.92708 2.265C1.97335 2.265 2.01961 2.2725 2.06587 2.2875L3.98576 3.0375C4.3867 2.745 4.81848 2.49 5.28882 2.3025L5.58181 0.315C5.60495 0.135 5.76686 0 5.95962 0H9.04378C9.23654 0 9.39846 0.135 9.42159 0.315L9.71459 2.3025C10.1849 2.49 10.6167 2.7375 11.0176 3.0375L12.9375 2.2875C12.9761 2.2725 13.0223 2.265 13.0686 2.265C13.2074 2.265 13.3385 2.3325 13.4079 2.4525L14.9499 5.0475C15.0425 5.2125 15.0039 5.415 14.8574 5.5275L13.2305 6.765C13.2614 7.005 13.2845 7.245 13.2845 7.5ZM11.7424 7.5C11.7424 7.3425 11.7347 7.185 11.7039 6.9525L11.5959 6.105L12.2821 5.58L13.1072 4.9425L12.5674 4.035L11.5882 4.4175L10.7709 4.74L10.0693 4.215C9.76085 3.99 9.45243 3.8175 9.12089 3.6825L8.30358 3.36L8.03372 1.5H6.96197L6.80777 2.5125L6.6844 3.36L5.8671 3.6825C5.55097 3.81 5.23485 3.99 4.9033 4.23L4.20936 4.74L3.40748 4.425L2.42826 4.0425L1.88853 4.95L2.72126 5.58L3.40748 6.105L3.29954 6.9525C3.2764 7.1775 3.26098 7.35 3.26098 7.5C3.26098 7.65 3.2764 7.8225 3.29954 8.055L3.40748 8.9025L2.72126 9.4275L1.88853 10.0575L2.42826 10.965L3.40748 10.5825L4.22478 10.26L4.92643 10.785C5.23485 11.01 5.54326 11.1825 5.87481 11.3175L6.69211 11.64L6.96197 13.5H8.04143L8.19564 12.4875L8.31901 11.64L9.13631 11.3175C9.45243 11.19 9.76856 11.01 10.1001 10.77L10.794 10.26L11.5959 10.575L12.5751 10.9575L13.1149 10.05L12.2821 9.42L11.5959 8.895L11.7039 8.0475C11.727 7.8225 11.7424 7.6575 11.7424 7.5ZM7.5017 4.5C5.7977 4.5 4.41754 5.8425 4.41754 7.5C4.41754 9.1575 5.7977 10.5 7.5017 10.5C9.2057 10.5 10.5859 9.1575 10.5859 7.5C10.5859 5.8425 9.2057 4.5 7.5017 4.5ZM5.95962 7.5C5.95962 8.325 6.65356 9 7.5017 9C8.34985 9 9.04378 8.325 9.04378 7.5C9.04378 6.675 8.34985 6 7.5017 6C6.65356 6 5.95962 6.675 5.95962 7.5Z' fill='%23D3DEEA'/%3E%3C/svg%3E%0A");
}

.drawer__overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  opacity: 0;

  transition: opacity 0.3s;
  will-change: opacity;
  background-color: #000;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.drawer__header {
  /* Optional */
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.drawer__close {
  /* Optional */
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%0A%3Csvg width='15px' height='16px' viewBox='0 0 15 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='2.-Menu' transform='translate(-15.000000, -13.000000)' stroke='%23000000'%3E%3Cg id='Group' transform='translate(15.000000, 13.521000)'%3E%3Cpath d='M0,0.479000129 L15,14.2971819' id='Path-3'%3E%3C/path%3E%3Cpath d='M0,14.7761821 L15,-1.24344979e-14' id='Path-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  margin-left: 1rem;
}

.drawer__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  max-width: 400px;
  z-index: 9999;
  overflow: auto;

  transition: transform 0.3s;
  will-change: transform;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  -webkit-transform: translate3d(103%, 0, 0);
  transform: translate3d(103%, 0, 0);
  /* extra 3% because of box-shadow */

  -webkit-overflow-scrolling: touch;
  /* enables momentum scrolling in iOS overflow elements */

  /* Optional */
  box-shadow: 0 2px 6px #777;
}

.drawer__content {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  flex-grow: 1;
  /* Optional */
  padding: 1.5rem;
}

.drawer__list {
  margin-top: 60px;
  padding: 0 0 0 30px;
}

.drawer__list-item {
  list-style: none;
}

.drawer__list-item:not(:last-child) {
  margin-bottom: 30px;
}

.drawer__link {
  text-decoration: none;
  color: #000;
  font-size: 20px;
  transition: color 150ms ease;
}

.drawer__link:hover {
  color: royalblue;
  transition: color 150ms ease;
}

.drawer--left .drawer__wrapper {
  left: 0;
  right: auto;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}

.drawer.is-active {
  display: block;
}

.drawer.is-visible .drawer__wrapper {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.drawer.is-visible .drawer__overlay {
  opacity: 0.5;
}

</style>

<script>
var drawer = function() {
  /**
   * Element.closest() polyfill
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
   */
  if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
    }
    Element.prototype.closest = function(s) {
      var el = this
      var ancestor = this
      if (!document.documentElement.contains(el)) return null
      do {
        if (ancestor.matches(s)) return ancestor
        ancestor = ancestor.parentElement
      } while (ancestor !== null)
      return null
    }
  }

  // Trap Focus
  // https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
  //
  function trapFocus(element) {
    var focusableEls = element.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
    )
    var firstFocusableEl = focusableEls[0]
    var lastFocusableEl = focusableEls[focusableEls.length - 1]
    var KEYCODE_TAB = 9

    element.addEventListener('keydown', function(e) {
      var isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB

      if (!isTabPressed) {
        return
      }

      if (e.shiftKey) {
        /* shift + tab */ if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus()
          e.preventDefault()
        }
      } /* tab */ else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus()
          e.preventDefault()
        }
      }
    })
  }

  //
  // Settings
  //
  var settings = {
    speedOpen: 50,
    speedClose: 350,
    activeClass: 'is-active',
    visibleClass: 'is-visible',
    selectorTarget: '[data-drawer-target]',
    selectorTrigger: '[data-drawer-trigger]',
    selectorClose: '[data-drawer-close]',
  }

  //
  // Methods
  //

  // Toggle accessibility
  var toggleAccessibility = function(event) {
    if (event.getAttribute('aria-expanded') === 'true') {
      event.setAttribute('aria-expanded', false)
    } else {
      event.setAttribute('aria-expanded', true)
    }
  }

  // Open Drawer
  var openDrawer = function(trigger) {
    // Find target
    var target = document.getElementById(trigger.getAttribute('aria-controls'))

    // Make it active
    target.classList.add(settings.activeClass)

    // Make body overflow hidden so it's not scrollable
    document.documentElement.style.overflow = 'hidden'

    // Toggle accessibility
    toggleAccessibility(trigger)

    // Make it visible
    setTimeout(function() {
      target.classList.add(settings.visibleClass)
      trapFocus(target)
    }, settings.speedOpen)
  }

  // Close Drawer
  var closeDrawer = function(event) {
    // Find target
    var closestParent = event.closest(settings.selectorTarget),
      childrenTrigger = document.querySelector('[aria-controls="' + closestParent.id + '"')

    // Make it not visible
    closestParent.classList.remove(settings.visibleClass)

    // Remove body overflow hidden
    document.documentElement.style.overflow = ''

    // Toggle accessibility
    toggleAccessibility(childrenTrigger)

    // Make it not active
    setTimeout(function() {
      closestParent.classList.remove(settings.activeClass)
    }, settings.speedClose)
  }

  // Click Handler
  var clickHandler = function(event) {
    // Find elements
    var toggle = event.target,
      open = toggle.closest(settings.selectorTrigger),
      close = toggle.closest(settings.selectorClose)

    // Open drawer when the open button is clicked
    if (open) {
      openDrawer(open)
    }

    // Close drawer when the close button (or overlay area) is clicked
    if (close) {
      closeDrawer(close)
    }

    // Prevent default link behavior
    if (open || close) {
      event.preventDefault()
    }
  }

  // Keydown Handler, handle Escape button
  var keydownHandler = function(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      // Find all possible drawers
      var drawers = document.querySelectorAll(settings.selectorTarget),
        i

      // Find active drawers and close them when escape is clicked
      for (i = 0; i < drawers.length; ++i) {
        if (drawers[i].classList.contains(settings.activeClass)) {
          closeDrawer(drawers[i])
        }
      }
    }
  }

  //
  // Inits & Event Listeners
  //
  document.addEventListener('click', clickHandler, false)
  document.addEventListener('keydown', keydownHandler, false)
}

drawer()

</script> -->