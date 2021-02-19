import React from "react";

class HeroBackgroundChange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hourly: '',
        };
    }

    componentDidMount() {
        this.getDate();
    }

    getDate = () => {

        var hourlyLoad = ''
        var day = new Date();
        var hora = day.getHours();
        var minutos = day.getMinutes();

        if( hora >= 7 && minutos >= 0 && hora <= 12 && minutos <= 59 ) {
            hourlyLoad = 'dia';
        }
        if( hora >= 13 && minutos >= 0 && hora <= 18 && minutos <= 59 ) {
            hourlyLoad = 'tarde';
        }
        if( hora >= 19 && minutos >= 0 && hora <= 23 && minutos <= 59 ) {
            hourlyLoad = 'noche';
        }
        if(hora >= 0 && minutos >= 0 && hora <= 6 && minutos <= 59) {
            hourlyLoad = "madrugada";
        }

        this.setState({
            hourly: hourlyLoad
        })

    }

    render() {
        switch (this.state.hourly) {
            case 'dia':
                return(
                    <section className="hero-bg-change" style={{height: 600, background: "#6195ED", display: "flex", justifyContent:"center", alignItems: "center"}}>
                        <h1 style={{color: "#ffffff"}}>
                            {this.state.hourly}
                        </h1>
                    </section>
                )
            case 'tarde':
                return(
                    <section className="hero-bg-change" style={{height: 600, background: "#DB9C3D", display: "flex", justifyContent:"center", alignItems: "center"}}>
                        <h1 style={{color: "#ffffff"}}>
                            {this.state.hourly}
                        </h1>
                    </section>
                )
            case 'noche':
                return(
                    <section className="hero-bg-change" style={{height: 600, background: "#0E165D", display: "flex", justifyContent:"center", alignItems: "center"}}>
                        <h1 style={{color: "#ffffff"}}>
                            {this.state.hourly}
                        </h1>
                    </section>
                )
            case 'madrugada':
                return(
                    <section className="hero-bg-change" style={{height: 600, background: "#03061C", display: "flex", justifyContent:"center", alignItems: "center"}}>
                        <h1 style={{color: "#ffffff"}}>
                            {this.state.hourly}
                        </h1>
                    </section>
                )
            default:
                return (
                    <section className="hero-bg-change" style={{height: 600, background: "#000000", display: "flex", justifyContent:"center", alignItems: "center"}}>
                        <h1 style={{color: "#ffffff"}}>webos prro :v</h1>
                    </section>
                )
        }
    }
}

export default HeroBackgroundChange