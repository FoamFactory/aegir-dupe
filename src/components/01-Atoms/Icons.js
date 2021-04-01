import React from 'react';

class Add extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        viewBox="0 0 64 64"
        fill={this.props.fill}
        height={this.props.size}>
        <path d="M32 5.33334C17.28 5.33334 5.33334 17.28 5.33334 32C5.33334 46.72 17.28 58.6667 32 58.6667C46.72 58.6667 58.6667 46.72 58.6667 32C58.6667 17.28 46.72 5.33334 32 5.33334ZM45.3333 34.6667H34.6667V45.3333H29.3333V34.6667H18.6667V29.3333H29.3333V18.6667H34.6667V29.3333H45.3333V34.6667Z" />
      </svg>
    );
  }
}

class AddFolder extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        viewBox="0 0 64 64"
        fill={this.props.fill}
        height={this.props.size}>
        <path d="M53.3333 16H32L26.6667 10.6667H10.6667C7.70667 10.6667 5.36 13.04 5.36 16L5.33333 48C5.33333 50.96 7.70667 53.3333 10.6667 53.3333H53.3333C56.2933 53.3333 58.6667 50.96 58.6667 48V21.3333C58.6667 18.3733 56.2933 16 53.3333 16ZM50.6667 37.3333H42.6667V45.3333H37.3333V37.3333H29.3333V32H37.3333V24H42.6667V32H50.6667V37.3333Z" />
      </svg>
    );
  }
}

class Barrels extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        preserveAspectRatio="xMidYMid meet"
        fill={this.props.fill}
        height={this.props.size}
        width={this.props.size}
        enable-background="new 0 0 511.156 511.156"
        viewBox="0 0 511.156 511.156">
        <g>
          <path d="m375.63 241.052c-18.014 0-35.21 3.554-50.938 9.983 39.459-23.603 65.938-66.756 65.938-115.983 0-74.468-60.584-135.052-135.052-135.052s-135.052 60.584-135.052 135.052c0 49.227 26.479 92.381 65.938 115.983-15.728-6.429-32.925-9.983-50.938-9.983-74.468 0-135.052 60.584-135.052 135.052s60.584 135.052 135.052 135.052c52.206 0 97.584-29.777 120.052-73.237 22.468 43.46 67.847 73.237 120.052 73.237 74.468 0 135.052-60.584 135.052-135.052s-60.584-135.052-135.052-135.052zm-45 40.139c9.329-4.441 19.412-7.543 30-9.064v207.953c-10.588-1.52-20.671-4.623-30-9.064zm60-9.064c10.588 1.52 20.671 4.623 30 9.064v189.825c-9.329 4.441-19.412 7.544-30 9.064zm-180.052-231.988c9.329-4.441 19.412-7.543 30-9.064v207.953c-10.588-1.52-20.671-4.623-30-9.064zm60-9.063c10.588 1.52 20.671 4.623 30 9.064v189.825c-9.329 4.441-19.412 7.543-30 9.064zm90.052 103.976c0 28.577-11.475 54.52-30.052 73.478v-146.956c18.578 18.958 30.052 44.901 30.052 73.478zm-210.104 0c0-28.577 11.475-54.52 30.052-73.478v146.956c-18.577-18.958-30.052-44.902-30.052-73.478zm105.052 135.052c18.014 0 35.21-3.554 50.938-9.983-21.614 12.929-39.333 31.721-50.938 54.168-11.605-22.448-29.324-41.24-50.938-54.168 15.728 6.429 32.924 9.983 50.938 9.983zm-165.052 11.087c9.329-4.441 19.412-7.544 30-9.064v207.953c-10.588-1.52-20.671-4.623-30-9.064zm60-9.064c10.588 1.52 20.671 4.623 30 9.064v189.826c-9.329 4.441-19.412 7.543-30 9.064zm-120.052 103.977c0-28.577 11.475-54.52 30.052-73.478v146.956c-18.577-18.958-30.052-44.901-30.052-73.478zm180.052 73.478v-146.956c18.577 18.958 30.052 44.902 30.052 73.478s-11.475 54.52-30.052 73.478zm60.052-73.478c0-28.577 11.475-54.52 30.052-73.478v146.957c-18.577-18.959-30.052-44.902-30.052-73.479zm180.052 73.478v-146.956c18.577 18.958 30.052 44.902 30.052 73.478s-11.474 54.52-30.052 73.478z"/>
        </g>
      </svg>
    );
  }
}
/**
 *  An icon representing a beer mug.
 *
 *  This has been imported directly as a React component so it can be colorized.
 *  It was originally obtained from The Noun Project and created by Vectors
 *  Market. Before distributing professionally, we will likely need to give
 *  appropriate attribution.
 */
class BeerMug extends React.Component {
    render() {
      return (
        <svg
          preserveAspectRatio="xMidYMid meet"
          className={this.props.className}
          fill={this.props.fill}
          height={this.props.size}
          viewBox="0 0 26 31.950001">
          <g transform="translate(-4.5,-1.55)">
            <path d="m 30.5,25.4 v -8.8 c 0,-1.7 -1.4,-3.1 -3.1,-3.1 h -2.9 v -2.8 c 0,-0.1 -0.1,-0.2 -0.2,-0.2 H 4.7 c -0.1,0 -0.2,0.1 -0.2,0.2 v 20.1 c 0,1.5 1.2,2.7 2.7,2.7 h 14.7 c 1.5,0 2.7,-1.2 2.7,-2.7 v -2.3 h 2.9 c 1.6,0 3,-1.4 3,-3.1 z m -20,3.2 c 0,0.5 -0.5,0.9 -1,0.9 -0.5,0 -1,-0.4 -1,-0.9 V 16.4 c 0,-0.5 0.5,-0.9 1,-0.9 0.5,0 1,0.4 1,0.9 z m 5,0 c 0,0.5 -0.5,0.9 -1,0.9 -0.5,0 -1,-0.4 -1,-0.9 V 16.4 c 0,-0.5 0.5,-0.9 1,-0.9 0.5,0 1,0.4 1,0.9 z m 5,0 c 0,0.5 -0.5,0.9 -1,0.9 -0.5,0 -1,-0.4 -1,-0.9 V 16.4 c 0,-0.5 0.5,-0.9 1,-0.9 0.5,0 1,0.4 1,0.9 z m 8,-3.2 c 0,0.6 -0.5,1.1 -1.1,1.1 h -2.9 v -11 h 2.9 c 0.6,0 1.1,0.5 1.1,1.1 z" />
            <path d="M 4.5,6 C 4.5,7.4 5.6,8.5 7,8.5 H 22 C 23.4,8.5 24.5,7.4 24.5,6 24.5,3.8 21.9,2.7 20.4,4.2 19.9,2.7 18.1,2.1 16.8,2.9 15.9,1.1 13.3,1.1 12.4,2.9 11,2.1 9.2,2.6 8.6,4.2 7,2.8 4.5,3.9 4.5,6 Z" />
          </g>
        </svg>
      );
    }
}

class Barley extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        preserveAspectRatio="xMidYMid meet"
        fill={this.props.fill}
        height={this.props.size}
        viewBox="0 0 40 59.333">
        <g transform="translate(-12,-3.667)">
          <path d="M 33,61 V 48 H 31 V 61 H 12 v 2 h 40 v -2 z" />
          <path d="m 42,28.822 -2.164,1.377 c -10e-4,10e-4 -0.003,0.002 -0.004,0.003 l -3.594,2.287 C 34.21,33.781 33,35.987 33,38.392 v 0.787 l 2.164,-1.377 c 10e-4,-10e-4 0.003,-0.002 0.004,-0.003 l 3.594,-2.287 C 40.79,34.219 42,32.013 42,29.608 Z" />
          <path d="m 33,25.178 2.164,-1.377 c 10e-4,-10e-4 0.003,-0.002 0.004,-0.003 l 3.594,-2.287 C 40.79,20.219 42,18.013 42,15.608 v -0.787 l -5.758,3.664 C 34.212,19.777 33,21.985 33,24.391 Z" />
          <path d="m 42,21.822 -2.164,1.377 c -10e-4,10e-4 -0.003,0.002 -0.004,0.003 l -3.594,2.287 C 34.21,26.781 33,28.987 33,31.392 v 0.787 l 2.164,-1.377 c 10e-4,-0.001 0.003,-0.002 0.004,-0.003 l 3.594,-2.287 C 40.79,27.219 42,25.013 42,22.608 Z" />
          <path d="m 39.832,37.202 -3.594,2.287 C 34.21,40.781 33,42.987 33,45.392 v 0.787 l 5.758,-3.664 C 40.788,41.223 42,39.015 42,36.609 v -0.787 l -2.164,1.377 c -10e-4,0.001 -0.003,0.002 -0.004,0.003 z" />
          <path d="m 25.242,35.514 3.59,2.285 c 10e-4,10e-4 0.002,10e-4 0.003,0.002 L 31,39.178 v -0.787 c 0,-2.406 -1.212,-4.613 -3.242,-5.905 l -3.59,-2.285 C 24.167,30.2 24.166,30.2 24.165,30.199 L 22,28.822 v 0.787 c 0,2.405 1.212,4.613 3.242,5.905 z" />
          <path d="m 25.242,28.514 3.59,2.285 c 10e-4,0.001 0.002,0.001 0.003,0.002 L 31,32.178 v -0.787 c 0,-2.406 -1.212,-4.613 -3.242,-5.905 l -3.59,-2.285 C 24.167,23.2 24.166,23.2 24.165,23.199 L 22,21.822 v 0.787 c 0,2.405 1.212,4.613 3.242,5.905 z" />
          <path d="M 25.242,42.514 31,46.178 v -0.787 c 0,-2.406 -1.212,-4.613 -3.242,-5.905 l -3.59,-2.285 C 24.167,37.2 24.166,37.2 24.165,37.199 L 22,35.822 v 0.787 c 0,2.405 1.212,4.613 3.242,5.905 z" />
          <path d="m 25.242,21.514 3.59,2.285 c 10e-4,0.001 0.002,0.001 0.003,0.002 L 31,25.178 v -0.787 c 0,-2.406 -1.212,-4.614 -3.242,-5.906 L 22,14.822 v 0.787 c 0,2.405 1.212,4.613 3.242,5.905 z" />
          <path d="M 32,15.333 32.1,15.2 C 33.326,13.567 34,11.542 34,9.5 34,7.458 33.325,5.434 32.1,3.8 L 32,3.667 31.9,3.8 C 30.675,5.434 30,7.458 30,9.5 c 0,2.042 0.675,4.066 1.9,5.7 z" />
        </g>
      </svg>
    );
  }
}

class Filter extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        preserveAspectRatio="xMidYMid meet"
        fill={this.props.fill}
        height={this.props.size}
        width={this.props.size}
        viewBox="0 0 24 24"
      >
        <path d="M13,20v-4.586L20.414,8C20.789,7.625,21,7.116,21,6.585V4c0-0.553-0.447-1-1-1H4C3.447,3,3,3.447,3,4v2.585 C3,7.116,3.211,7.625,3.586,8L11,15.414V22L13,20z"></path>
      </svg>
    );
  }
}

class GroupsGuilds extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        preserveAspectRatio="xMidYMid meet"
        fill={this.props.fill}
        height={this.props.size}
        width={this.props.size}
        viewBox="0 0 24 24">
        <path d="M12 14c1.381 0 2.631-.56 3.536-1.465.904-.904 1.464-2.154 1.464-3.535s-.56-2.631-1.464-3.535c-.905-.905-2.155-1.465-3.536-1.465s-2.631.56-3.536 1.465c-.904.904-1.464 2.154-1.464 3.535s.56 2.631 1.464 3.535c.905.905 2.155 1.465 3.536 1.465zM20 15c.69 0 1.315-.279 1.768-.731.453-.452.732-1.077.732-1.769 0-.69-.279-1.315-.732-1.768-.453-.453-1.078-.732-1.768-.732-.691 0-1.316.279-1.769.732-.452.453-.731 1.078-.731 1.768 0 .691.279 1.316.731 1.769s1.078.731 1.769.731zM20 15.59c-1.331 0-2.332.406-2.917.968-1.115-.917-2.878-1.558-5.083-1.558-2.266 0-3.995.648-5.092 1.564-.596-.565-1.608-.974-2.908-.974-2.188 0-3.5 1.09-3.5 2.182 0 .545 1.312 1.092 3.5 1.092.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.406 2 6.417 2 3.762 0 6.417-1 6.417-2l-.02-.255c.463.073.995.118 1.603.118 2.051 0 3.5-.547 3.5-1.092 0-1.092-1.373-2.182-3.5-2.182zM4 15c.69 0 1.315-.279 1.768-.732.453-.453.732-1.078.732-1.768 0-.689-.279-1.314-.732-1.768-.453-.452-1.078-.732-1.768-.732-.691 0-1.316.28-1.769.732-.452.454-.731 1.079-.731 1.768 0 .69.279 1.315.731 1.768.453.453 1.078.732 1.769.732z"/>
      </svg>
    );
  }
}

class GridView extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        preserveAspectRatio="xMidYMid meet"
        fill={this.props.fill}
        height={this.props.size}
        width={this.props.size}
        viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"/>
      </svg>
    );
  }
}

class IDCard extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        preserveAspectRatio="xMidYMid meet"
        fill={this.props.fill}
        height={this.props.size}
        width={this.props.size}
        viewBox="0 0 1024 1024">
        <path d="M373 411c-28.5 0-51.7 23.3-51.7 52s23.2 52 51.7 52 51.7-23.3 51.7-52-23.2-52-51.7-52zm555-251H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM608 420c0-4.4 1-8 2.3-8h123.4c1.3 0 2.3 3.6 2.3 8v48c0 4.4-1 8-2.3 8H610.3c-1.3 0-2.3-3.6-2.3-8v-48zm-86 253h-43.9c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.5-46-90.5-97.2-90.5s-93.4 40-97.2 90.5c-.3 4.2-3.7 7.5-7.9 7.5H224a8 8 0 0 1-8-8.4c2.8-53.3 32-99.7 74.6-126.1a111.8 111.8 0 0 1-29.1-75.5c0-61.9 49.9-112 111.4-112s111.4 50.1 111.4 112c0 29.1-11 55.5-29.1 75.5 42.7 26.5 71.8 72.8 74.6 126.1.4 4.6-3.2 8.4-7.8 8.4zm278.9-53H615.1c-3.9 0-7.1-3.6-7.1-8v-48c0-4.4 3.2-8 7.1-8h185.7c3.9 0 7.1 3.6 7.1 8v48h.1c0 4.4-3.2 8-7.1 8z"/>
      </svg>
    );
  }
}

class Inventory extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        preserveAspectRatio="xMidYMid meet"
        fill={this.props.fill}
        height={this.props.size}
        width={this.props.size}
        viewBox="0 0 512 512">
        <circle cx="256" cy="256" r="256" fill-opacity="0"></circle>
        <g class="" transform="translate(0,-25)">
          <path d="M37.727 25l78 78h280.546l78-78H37.727zM25 37.727v436.546l78-78V115.727l-78-78zm462 0l-78 78v280.546l78 78V37.727zM79.957 40a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zM432 40.793a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zM112 72a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm287.45 0a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm63.42 0a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zM48 73.047a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zM79.395 104a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm352.605.2a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zM121 121v193.273l53.7-53.7L174.065 121H121zm71.064 0l.555 121.654 54.38-54.38V121h-54.936zM265 121v49.273L314.273 121H265zm74.727 0L121 339.727V391h51.273L391 172.273V121h-51.273zM391 197.727l-53.023 53.023V391H391V197.727zm-71.023 71.023L265 323.727V391h54.977V268.75zM247 341.727L197.727 391H247v-49.273zM77.97 392a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm354.03.658a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zM115.727 409l-78 78h436.546l-78-78H115.727zM48 423.752a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm64 .8a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm288 .712a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm64 4.74a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zM432 456a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm-352 2.56a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8z" fill-opacity="1" transform="translate(51.2, 51.2) scale(0.8, 0.8) rotate(0, 256, 256) skewX(0) skewY(0)"></path>
        </g>
      </svg>
    );
  }
}

class Lineage extends React.Component {
  render() {
    let strokeStyle = {
      strokeWidth: 4,
      stroke: this.props.fill,
    };

    let classList = [
      'strokedIcon',
      this.props.className
    ];

    return (
      <svg
        className={classList.join(' ')}
        preserveAspectRatio="xMidYMid meet"
        fill={this.props.fill}
        height={this.props.size}
        viewBox="0 0 37.616273 90.914383">
        <g transform="translate(-43.746457,-41.388058)">
          <circle cx="57.830357" cy="48.669643" r="7.1815472" />
          <circle cx="74.081184" cy="73.994583" r="7.1815476" />
          <circle cx="62.36607" cy="113.68155" r="18.520834" />
          <path style={strokeStyle} d="M 57.830357 48.669643 L 74.081184 73.994583" />
          <path style={strokeStyle} d="M 74.081184 73.994583 L 62.36607 113.68155" />
         </g>
       </svg>
    );
  }
}

class ListView extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        fill={this.props.fill}
        width={this.props.size}
        height={this.props.size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        >
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z"/>
      </svg>
    );
  }
}

class Mail extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        fill={this.props.fill}
        width={this.props.size}
        height={this.props.size}
        preserveAspectRatio="xMidYMid meet"
        viewBox='0 0 512 512'>
        <rect x='48' y='96' width='416' height='320' rx='40' ry='40' fill='none' stroke={this.props.fill} strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
        <path fill='none' stroke={this.props.fill} strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M112 160l144 112 144-112'/>
      </svg>
    );
  }
}

class Pencil extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        fill={this.props.fill}
        width={this.props.size}
        height={this.props.size}
        preserveAspectRatio="xMidYMid meet"
        viewBox='0 0 512 512'>
        <path stroke={this.props.fill} strokeLinecap='round' strokeLinejoin='round' strokeWidth='44' d='M358.62 129.28L86.49 402.08 70 442l39.92-16.49 272.8-272.13-24.1-24.1zM413.07 74.84l-11.79 11.78 24.1 24.1 11.79-11.79a16.51 16.51 0 000-23.34l-.75-.75a16.51 16.51 0 00-23.35 0z'/>
      </svg>
    );
  }
}

class Person extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        fill={this.props.fill}
        width={this.props.size}
        height={this.props.size}
        preserveAspectRatio="xMidYMid meet"
        viewBox='0 0 512 512'>
        <path d='M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z'/>
        <path d='M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z'/>
      </svg>
    );
  }
}

class Quartermaster extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        fill={this.props.fill}
        width={this.props.size}
        height={this.props.size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 512 512">
        <circle cx="256" cy="256" r="256" fill-opacity="0"></circle>
        <g transform="translate(0,-25)">
          <path d="M256 100c-8 0-16 4-32 12l10.848 32.543C179.665 147.226 112.76 160.04 98.68 183h314.625c-7.012-11.422-27.093-20.334-52.305-26.738V135h-18v17.266c-21.203-4.107-44.4-6.68-65.848-7.723L288 112c-16-8-24-12-32-12zM96 201v14H55v18h41v151c0 16 16 32 32 32h256c16 0 32-16 32-32V233h41v-18h-41v-14H96z" fill-opacity="1" transform="translate(51.2, 51.2) scale(0.8, 0.8) rotate(0, 256, 256) skewX(0) skewY(0)"></path>
        </g>
      </svg>
    );
  }
}

class RatingSheets extends React.Component {
  render() {
    let strokeStyle = {
      strokeWidth: 2,
      stroke: this.props.fill,
      fill: "none"
    };

    return (
      <svg
        className={this.props.className}
        style={strokeStyle}
        preserveAspectRatio="xMidYMid meet"
        height={this.props.size}
        viewBox="0 0 24 24">
        <path  d="M1,9 L1,23 L15,23 M5,5 L5,19 L19,19 M9,15 L23,15 L23,1 L9,1 L9,15 L9,15 L9,15 Z" />
      </svg>
    );
  }
}

class RecipeBook extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        fill={this.props.fill}
        width={this.props.size}
        height={this.props.size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 512 512">
        <circle cx="256" cy="256" r="256" fill-opacity="0"></circle>
        <g class="" transform="translate(0,-25)">
          <path d="M101.1 24.88L135.5 157l88.1 4.8-3-17.2-1.9-11.2 123.3 7.4 4.9 27.8 75.9 4.2-32.5-124.62-289.2-23.3zm-18.82 1.6c-30.5 11.9-55.7 53.1-49.8 75.32l3.3 11.8c.6-1.8 1.3-3.5 2.1-5.3 9.9-23.72 26.5-46.82 50.3-58.92l-5.9-22.9zm10.8 41.6c-16.7 10-29.9 28.1-38 47.42-5.2 12.5-8 25.6-8.7 36.5l17.46 63.5c12.8-21.2 30.19-42.3 53.96-52.4L93.08 68.08zM240.3 152.8l20.2 117.4 87 4.3L326.8 158l-86.5-5.2zm46.8 21.2a25.29 20.33 24.87 0 1 2.4 0 25.29 20.33 24.87 0 1 27.2 22.4 25.29 20.33 24.87 0 1-13.2 19.2l20.8 37.5-48.7-2.2 10.9-36.1a25.29 20.33 24.87 0 1-18.5-20.6 25.29 20.33 24.87 0 1 19.1-20.2zm-146.8 1.3l15 57.6 81.2 3.4-9.8-56.2-86.4-4.8zm-17.9 5.6c-21.8 10.6-39.52 36.3-51.73 59.4l12.46 45.3c10.27-15.7 23.97-32.8 53.57-49.9l-14.3-54.8zm227.8 5.9l9.7 54.7 81.7 3.5-14.1-53.9-77.3-4.3zM160 251.1l31.2 119.6 289.2 23.2-34-130.6-83.3-3.5 6 33.9-123.8-6.3-5.7-32.9-79.6-3.4zm-18.6 2.7c-32 19.4-39.7 35.9-51.79 55.4l21.49 78.1c.3-.5.6-1.1.9-1.6 10.6-19.3 27.8-37.7 51.1-48.5l-21.7-83.4zM168 355.7c-17.7 9.1-31.2 23.7-39.6 39-4.5 8.1-7.3 16.3-8.7 23.7l11.7 42.4 1.6.2c-3.8-27.6 11.4-60.5 41.3-81.1l-6.3-24.2zm26.3 34c-32.6 17.3-46.5 52.4-41.8 72.9l289.8 24.5c-5.3-7.8-8.7-17.9-8.6-28.5l-22.4-9 46.3-7.3-13.5-12.8c5.6-7 13.7-13.1 24.9-17.7l-274.7-22.1z" fill-opacity="1" transform="translate(51.2, 51.2) scale(0.8, 0.8) rotate(0, 256, 256) skewX(0) skewY(0)"></path>
        </g>
      </svg>
    );
  }
}

class Ruler extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        fill={this.props.fill}
        width={this.props.size}
        height={this.props.size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M4.929 13.207l2.121 2.121 1.414-1.414-2.12-2.121 2.12-2.121 2.829 2.828 1.414-1.414L9.88 8.257 12 6.136l2.121 2.121 1.415-1.414-2.122-2.121 2.829-2.829a1 1 0 0 1 1.414 0l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.414l3.536-3.536z"/>
      </svg>
    );
  }
}

class Shield extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width={this.props.size}
        height={this.props.size}
        fill={this.props.fill}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
      </svg>
    );
  }
}

class Sort extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        fill={this.props.fill}
        width={this.props.size}
        height={this.props.size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <path d="M8 16L4 16 10 22 10 19 10 16 10 2 8 2zM14 5L14 8 14 22 16 22 16 8 20 8 14 2z"></path>
      </svg>
    );
  }
}

class Trash extends React.Component {
  render() {
    return (
      <svg
        className={this.props.className}
        fill={this.props.fill}
        width={this.props.size}
        height={this.props.size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>
      </svg>
    );
  }
}

const Icons = {
  Add: Add,
  AddFolder: AddFolder,
  Barley: Barley,
  Barrels: Barrels,
  BeerMug: BeerMug,
  Filter: Filter,
  GridView: GridView,
  GroupsGuilds: GroupsGuilds,
  IDCard: IDCard,
  Inventory: Inventory,
  Lineage: Lineage,
  ListView: ListView,
  Mail: Mail,
  Pencil: Pencil,
  Person: Person,
  Quartermaster: Quartermaster,
  RatingSheets: RatingSheets,
  RecipeBook: RecipeBook,
  Ruler: Ruler,
  Shield: Shield,
  Sort: Sort,
  Trash: Trash
};

export { Icons };
