import React from 'react'
import "./naa.css"
const Naaa = () => {
  return (
    <div>
      <div id="topnav" class="navbar">
        <a href="#" class="logo">
          TUAT
          <span style="color: red">TA</span>
        </a>
        <div class="navbar-right menu">
          <a href="#" class="active">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Chefs</a>
          <a href="#">Contact</a>
        </div>
        <div class="navbar-right">
          <a href="javascript:void(0);" class="icon" onclick="showMenu()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>

      <div id="slideshow-container" class="slideshow-container">
        <div
          class="slide-item bgimg fade"
          style="background-image: url('assets/BanhMi_NgonVietnam01.jpg');"
        >
          <div class="caption">
            <h2>Banh mi</h2>
            <p>
              Banh mi is the Vietnamese word for bread. In Vietnamese cuisine,
              it also refers to a type of short baguette with thin, crisp crust
              and soft, airy texture inside that is often split lengthwise and
              filled with various savory ingredients like a submarine sandwich
              and served as a meal
            </p>
            <button>Order now</button>
          </div>
        </div>

        <div
          class="slide-item bgimg fade"
          style="background-image: url('assets/maxresdefault.jpg');"
        >
          <div class="caption">
            <h2>Mi quang</h2>
            <p>
              Mi Quang is a Vietnamese noodle dish that originated from Quảng
              Nam Province in central Vietnam. In the region, it is one of the
              most popular and nationally recognized food items, and served on
              various occasions such as at family parties
            </p>
            <button>Order now</button>
          </div>
        </div>

        <div
          class="slide-item bgimg fade"
          style="background-image: url('assets/vy-huynh-rcHHKG01IPY-unsplash.jpg');"
        >
          <div class="caption">
            <h2>Bun bo hue</h2>
            <p>
              Bun bo hue is a popular Vietnamese soup containing rice vermicelli
              (bun) and beef (bo). Huế is a city in central Vietnam associated
              with the cooking style of the former royal court. The dish is
              greatly admired for its balance of spicy, salty, and umami flavors
            </p>
            <button>Order now</button>
          </div>
        </div>

        <div id="slide-control" class="slide-control">
          <span class="dot" onclick="chooseSlide(0)"></span>
          <span class="dot" onclick="chooseSlide(1)"></span>
          <span class="dot" onclick="chooseSlide(2)"></span>
        </div>
      </div>
    </div>
  );
}

export default Naaa