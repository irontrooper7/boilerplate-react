import React from "react";

class HeroScroll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {itemHeight: 50};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

        var scrolling = Math.round(window.pageYOffset / 10)

        this.setState({
            itemHeight: scrolling + 50
        })

    }

    render() {
        return (
            <div className="hero-scroll">
                <div
                    className="base"
                    style={{
                        height: `${this.state.itemHeight}%`,
                        background: this.props.background ? `url(${this.props.background}), no-repeat` : "#000000",
                    }}
                ></div>
                <div className="container">
                    <div className="grid algCenter">
                        <div className="col-lg-6 col-xs-12">
                            <div className="cont-info">
                                <strong>
                                    <h1>{this.props.title}</h1>
                                    <p>{this.props.text}</p>
                                </strong>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="example"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default HeroScroll