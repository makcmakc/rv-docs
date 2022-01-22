# Badge

A number or status mark on buttons and icons.

### Basic usage 

Displays the amount of new notifications.

<div class="badge-widget">
  <div>
    <svg width="25" height="24" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M6.3125 2.17773C6.3125 1.52065 6.84292 0.990234 7.5 0.990234C8.15708 0.990234 8.6875 1.52065 8.6875 2.17773V3.10398C11.1733 3.64232 13.0417 5.85898 13.0417 8.51107V13.2611L14.625 14.8444V15.6361H0.375V14.8444L1.95833 13.2611V8.51107C1.95833 5.85898 3.82667 3.64232 6.3125 3.10398V2.17773ZM7.5 4.55273C9.685 4.55273 11.4583 6.32607 11.4583 8.51107V14.0527H3.54167V8.51107C3.54167 6.32607 5.315 4.55273 7.5 4.55273ZM5.92462 16.4357C5.92462 17.3065 6.6292 18.0111 7.50004 18.0111C8.37087 18.0111 9.07546 17.3065 9.07546 16.4357H5.92462Z"
        fill="#A0AEBD" />
    </svg>
  </div>

  <div class="badge-widget__content" data-overflow-count="10" data-count="99">
    <div>82</div>
  </div>
</div>


<style lang="scss">
$badge-background: #409eff !default;
$badge-color: #FFFFFF !default;

.badge-widget {
  position: relative;
  display: inline-block;

  margin-top: 30px;

  &__content {
    position: absolute;
    transition: .3s cubic-bezier(.4,0,.2,1);
    display: flex;
    align-items: center;
    justify-content: center;
    right: -16px;
    top: -10px;
    font-size: 10px;
    font-style: normal;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: $badge-color;
    pointer-events: none;
    background-color: $badge-background;
  }
}
</style>