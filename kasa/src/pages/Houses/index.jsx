import React from "react"
import { NavLink, useParams } from "react-router-dom"
import "./Houses.css"
import Carrousel from "../../components/Carrousel"
import Infos from "../../components/Infos"
import Error from "../Error"
import Collapse from "../../components/Collapse"

class Houses extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      datas: [],
    }
  }

  getData(url) {
    fetch(url)
      .then((response) => response.json())
      .then(
        (jsonResponse) => {

          const idInUrl = this.props.params.id
          const itemToShow = jsonResponse.find((item) => item.id === idInUrl)
          
          if (itemToShow) {
            this.setState({
              isLoaded: true,
              datas: itemToShow,
            })
          }
        }
      ).catch((error) => {
        this.setState({ error })
      })
      // pour traiter les cas d'erreur dans le .catch
  }

  componentDidMount() {
    this.getData("../datas.json")
  }

  render() {
    const { error, isLoaded } = this.state

    if (error) {
      return (
        <div>
          <Error />
        </div>
      )
    } else if (!isLoaded) {
      return (
        <NavLink to="/logement_non_trouvé">
          <div className="progress">
            Chargement en cours, si celui-ci dure trop longtemps cliquer pour
            essayer à nouveau
          </div>
        </NavLink>
      )
    } else {
      const {
        host,
        location,
        rating,
        tags,
        title,
        description,
        equipments,
        pictures,
      } = this.state.datas

      return (
        <main className="Houses" id= "Houses">
          <Carrousel imgUrls={pictures} />
          <Infos
            location={location}
            title={title}
            tags={tags}
            host={host}
            rating={rating}
          />
          <div className="houseCollapses">
            <div className="houseDetails">
              <Collapse title="Description" content={description} />
            </div>
            <div className="houseDetails">
              <Collapse title="Équipements" content={equipments} />
            </div>
          </div>
        </main>
      )
    }
  }
}

export default function HousesWrapper(props) {
    let params = useParams()
    return (<Houses {...props} params = {params} />)
}