import React, { Component } from 'react'
import './style.css'

export default class Flow extends Component {
  constructor() {
    super()
    this.state = { project: {} }
  }

  handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:5000/update', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href
    name = name.replace(/[[\]]/g, '\\$&')
    let regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
      results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  }

  componentDidMount() {
    const getTitle = this.getParameterByName('title')
    fetch(`/get-single-data?title=${getTitle}`)
      .then(res => res.json())
      .then(project => this.setState({ project }))
  }

  render() {
    const aboutProject = {
      title: this.state.project.title,
      role: this.state.project.role,
      status: this.state.project.status,
    }
    console.log(aboutProject)

    return (
      <div>
        <label>Feature</label>
        <h1>{aboutProject.title}</h1>
        {aboutProject.status === 'ideation' && (
          <Cards
            title={aboutProject.title}
            active1={{ border: '1px solid dodgerblue', opacity: 1 }}
            text="This is the current state of the feature."
          />
        )}

        {aboutProject.status === 'specification' && (
          <Cards
            title={aboutProject.title}
            active2={{ border: '1px solid dodgerblue', opacity: 1 }}
            text="This is the current state of the feature."
          />
        )}

        {aboutProject.status === 'design' && (
          <Cards
            title={aboutProject.title}
            active3={{ border: '1px solid dodgerblue', opacity: 1 }}
            text="This is the current state of the feature."
          />
        )}

        {aboutProject.status === 'approveDesign' && (
          <Cards
            title={aboutProject.title}
            active4={{ border: '1px solid dodgerblue', opacity: 1 }}
            text="This is the current state of the feature."
          />
        )}

        {aboutProject.status === 'implementation' && (
          <Cards
            title={aboutProject.title}
            active5={{ border: '1px solid dodgerblue', opacity: 1 }}
            text="This is the current state of the feature."
          />
        )}

        {aboutProject.status === 'testFeature' && (
          <Cards
            title={aboutProject.title}
            active6={{ border: '1px solid dodgerblue', opacity: 1 }}
            text="This is the current state of the feature."
          />
        )}

        {aboutProject.status === 'approveFeature' && (
          <Cards
            title={aboutProject.title}
            active7={{ border: '1px solid dodgerblue', opacity: 1 }}
            text="This is the current state of the feature."
          />
        )}

        {aboutProject.status === 'deploy' && (
          <Cards
            title={aboutProject.title}
            active8={{ border: '1px solid dodgerblue', opacity: 1 }}
            text="This is the current state of the feature."
          />
        )}
      </div>
    )
  }
}

class Cards extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="cards">
        <Card
          form="true"
          value="ideation"
          title={this.props.title}
          status="specification"
          active={this.props.active1}
          text={this.props.text}
        />
        <Card
          value="specification"
          form="true"
          title={this.props.title}
          status="design"
          active={this.props.active2}
          text={this.props.text}
        />
        <Card
          value="design"
          form="true"
          title={this.props.title}
          status="approveDesign"
          active={this.props.active3}
          text={this.props.text}
        />
        <Card
          value="approve design"
          form="true"
          title={this.props.title}
          status="implementation"
          active={this.props.active4}
          text={this.props.text}
        />
        <Card
          value="implentation"
          form="true"
          title={this.props.title}
          status="testFeature"
          active={this.props.active5}
          text={this.props.text}
        />
        <Card
          value="feature test"
          form="true"
          title={this.props.title}
          status="approveFeature"
          active={this.props.active6}
          text={this.props.text}
        />
        <Card
          value="feature approve"
          form="true"
          title={this.props.title}
          status="deploy"
          active={this.props.active7}
          text={this.props.text}
        />
        <Card
          value="deploy"
          active={this.props.active8}
          text={this.props.text}
        />
      </div>
    )
  }
}

class Card extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div style={this.props.active} className="card">
        <h2>{this.props.value}</h2>
        {this.props.active && <p>{this.props.text}</p>}
        {this.props.form === 'true' && (
          <form
            action={`/update?title=${this.props.title}&status=${
              this.props.status
            }`}
            method="post"
          >
            <button className="button">Slutför</button>
          </form>
        )}
      </div>
    )
  }
}
