import React from "react"
import "./home.css"
import BannerHome from "../../assets/banner-Home.jpg"
import Banner from "../../components/Banner"
import Galery from "../../components/Galery"

export default class Home extends React.Component {
  render() {
    return (
      <main className="Home">
        <Banner
          imgSrc={BannerHome}
          altTxt="paysage terre et mer"
          title="Chez vous, partout et ailleurs"
        />
        <Galery />
      </main>
    )
  }
}
