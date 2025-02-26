import React from "react"

import Icon from "../../components/icon"
import Typography from "../../components/typography"
import Spacer from "../../components/spacer"

import style from "./intro.module.scss"

import logo from "../../assets/images/logo.svg"
import twitter from "../../assets/images/twitter.svg"
import github from "../../assets/images/github.svg"
import skyline from "../../assets/images/skyline.svg"
import TextBlock from "../../components/text-block"
import MiniHeadline from "../../components/mini-headline"

const Intro = () => (
  <div className={style.root}>
    <TextBlock headline="Welcome to JSCraftCamp 2022! 🎉">
      <MiniHeadline>When?</MiniHeadline>
      <Typography variant="subline" paragraph>
        June, 17th &amp; 18th 2022
      </Typography>
      <Spacer size="xs" />
      <MiniHeadline>Where?</MiniHeadline>
      <Typography variant="subline" paragraph>
        codecentric offices Munich,{" "}
        <a href="https://www.ecosia.org/search?method=index&q=August-Everding-Str+20+81671+M%C3%BCnchen">
          August-Everding-Str 20, 81671 München
        </a>
      </Typography>
      <Spacer size="xs" />
      <MiniHeadline>Participate for free!</MiniHeadline>
      <Typography variant="subline" paragraph>
        <a href="/register">Register now</a> and follow us{" "}
        <a href="https://twitter.com/jscraftcamp">on twitter @JSCraftCamp!</a>
      </Typography>
    </TextBlock>

    <Spacer size="xs" />

    <div className={style.logo}>
      <Icon source={logo} />
    </div>
    <div className={style.text}>
      <Typography className={style.headline} component="h1">
        JSCraftCamp 2022
      </Typography>
      <Typography variant="subline">
        Will return to Munich, this summer!
        <br />A Barcamp about JavaScript and Crafting Software
      </Typography>
      <Spacer size="xs" />
      <div className={style.social}>
        <a href="https://twitter.com/jscraftcamp">
          <Icon className={style.socialIcon} source={twitter} />
        </a>
        <a href="https://github.com/jscraftcamp/website">
          <Icon className={style.socialIcon} source={github} />
        </a>
      </div>
      <Icon className={style.skyline} source={skyline} />
    </div>
  </div>
)
export default Intro
