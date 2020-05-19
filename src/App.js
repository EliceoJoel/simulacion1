import React, { Component } from 'react'

var cara=0, escudo=0, probCara=0, probEscudo=0
var uno=0, dos=0, tres=0, cuatro=0, cinco=0, seis=0
var probUno=0, probDos=0, probTres=0, probCuatro=0, probCinco=0, probSeis=0
var resultados = []

class App extends Component {
    constructor() {
        super()
        this.state = {
            nroTirosMoneda: 0,
            nroTirosDado: 0,
            uno: 0, dos:0, tres:0, cuatro:0, cinco:0, seis:0,
            probUno: '0%', probDos:'0%', probTres:'0%', probCuatro:'0%', probCinco:'0%', probSeis:'0%',
            showMoneda:false,
            showDado:false,
        }

        this.onChange = this.onChange.bind(this)
        this.experimentoMoneda = this.experimentoMoneda.bind(this)
        this.experimentoDado =this.experimentoDado.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({showMoneda:false, showDado:false})
        //borra datos anteriores
        cara=0; escudo=0; probCara=0; probEscudo=0;
        uno=0; dos=0; tres=0; cuatro=0; cinco=0; seis=0;
        probUno=0; probDos=0; probTres=0; probCuatro=0; probCinco=0; probSeis=0; 
        resultados=[]
    }

    aleatorio(minimo, maximo){
      return Math.floor(Math.random() * ((maximo+1) - minimo) + minimo);
    }

    experimentoMoneda(e) {
      e.preventDefault()
      //borra datos anteriores
      cara=0; escudo=0; probCara=0; probEscudo=0; 
      resultados=[]

      this.setState({showMoneda:true})
      for(var i=0 ; i<this.state.nroTirosMoneda ; i++){
        var res = this.aleatorio(1,2)
        if(res === 1){
          cara++
          resultados.push("C")
        }else{
          escudo++
          resultados.push("E")
        }
      }
      probCara=(cara/this.state.nroTirosMoneda)*100
      probEscudo=(escudo/this.state.nroTirosMoneda)*100
    }

    experimentoDado(e) {
      e.preventDefault()
      //borra datos anteriores
      uno=0; dos=0; tres=0; cuatro=0; cinco=0; seis=0;
      probUno=0; probDos=0; probTres=0; probCuatro=0; probCinco=0; probSeis=0;
      resultados=[]

      this.setState({showDado:true})
      for(var i=0 ; i<this.state.nroTirosDado ; i++){
        var res = this.aleatorio(1,6)
        if(res === 1){
          uno++; resultados.push(res)
        }
        if(res === 2){
          dos++; resultados.push(res)
        }
        if(res === 3){
          tres++; resultados.push(res)
        }
        if(res === 4){
          cuatro++; resultados.push(res)
        }
        if(res === 5){
          cinco++; resultados.push(res)
        }
        if(res === 6){
          seis++; resultados.push(res)
        }
      }
      probUno=(uno/this.state.nroTirosDado)*100
      probDos=(dos/this.state.nroTirosDado)*100
      probTres=(tres/this.state.nroTirosDado)*100
      probCuatro=(cuatro/this.state.nroTirosDado)*100
      probCinco=(cinco/this.state.nroTirosDado)*100
      probSeis=(seis/this.state.nroTirosDado)*100
      
  }

    render() {
        return (
          <div>
            <div className="p-3 mb-2 bg-success text-white text-center h3">Proyecto de unidad 1 de simulación</div>
            <div className="container mt-5">
              <div className="row">
                <div className="col">
                  <form noValidate onSubmit={this.experimentoMoneda}>
                    <h4 className="text-center mb-4">Probabilidad de tirar moneda</h4>
                    <div className="form-group">
                      <label htmlFor="titulo">Numero de tiros</label>
                      <input 
                        type="number" 
                        min="0" 
                        className="form-control" 
                        name="nroTirosMoneda"
                        value={this.state.nroTirosMoneda}
                        onChange={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Realizar experimento</button>
                  </form>
                  {this.state.showMoneda?
                    <div>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          Numero de caras : {cara}
                        </div>
                        <div className="col-md-6">
                          Probabilidad caras: {probCara+"%"}
                        </div>
                        <div className="col-md-6">
                          Numero de escudos : {escudo}
                        </div>
                        <div className="col-md-6">
                          Probabilidad escudos: {probEscudo+"%"}
                        </div>
                      </div>
                      <div className="container my-4">
                        <div className="row">
                          {resultados.map(res => (
                            <div className="col-md-1 border">{res}</div>
                           ))
                          }
                        </div>
                      </div>
                    </div>
                  :null
                  }
                </div>
                <div className="col">
                  <form noValidate onSubmit={this.experimentoDado}>
                    <h4 className="text-center mb-4">Probabilidad de tirar dado</h4>
                    <div className="form-group">
                      <label htmlFor="titulo">Numero de tiros</label>
                      <input 
                        type="number" 
                        min="0" 
                        className="form-control" 
                        name="nroTirosDado"
                        value={this.state.nroTirosDado}
                        onChange={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Realizar experimento</button>
                  </form>
                  {this.state.showDado?
                    <div>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          Cantidad de uno : {uno}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {probUno+"%"}
                        </div>
                        <div className="col-md-6">
                          Cantidad de dos : {dos}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {probDos+"%"}
                        </div>
                        <div className="col-md-6">
                          Cantidad de tres : {tres}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {probTres+"%"}
                        </div>
                        <div className="col-md-6">
                          Cantidad de cuatro : {cuatro}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {probCuatro+"%"}
                        </div>
                        <div className="col-md-6">
                          Cantidad de cinco : {cinco}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {probCinco+"%"}
                        </div>
                        <div className="col-md-6">
                          Cantidad de seis : {seis}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {probSeis+"%"}
                        </div>
                      </div>
                      <div className="container my-4">
                        <div className="row">
                          {resultados.map(res => (
                            <div className="col-md-1 border">{res}</div>
                           ))
                          }
                        </div>
                      </div>
                    </div>
                  :null
                  }  
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default App

