import React from "react"
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            val:0,unit1:"Celsius",unit2:"Celsius"
        }

    }
    render(){
    return(
    <>
        <div className="container">
            <h1 className="mt-3 text-center p-4">
                Temperature Converter
            </h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                this.props.convert(this.state.val,this.state.unit1,this.state.unit2)
            }}>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="Degrees" className="form-label">Enter Degrees</label>
                        <input type="text" value="Enter Degrees" className="form-control" id="Degrees" aria-describedby="emailHelp" placeholder="Enter Degrees" onChange={(e)=>{this.setState({val:e.currentTarget.value})}} value={this.state.val}/>
                    </div>
                    <div className="col">
                        <label htmlFor="unit1" className="form-label">Select Unit</label>
                        <select className="form-select" aria-label="Default select example" id="unit1" onChange={(e)=>{this.setState({unit1:e.currentTarget.value})}} value={this.state.unit1}>
                            <option>Celsius</option>
                            <option>Fahrenheit</option>
                            <option>Kelvin</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="unit2" className="form-label">Convert to</label>
                    <select className="form-select" aria-label="Default select example" id="unit2" onChange={(e)=>{
                        this.setState({unit2:e.currentTarget.value})}} value={this.state.unit2}
                        >
                            <option value="Celsius">Celsius</option>
                            <option value="Fahrenheit">Fahrenheit</option>
                            <option value="Kelvin">Kelvin</option>
                    </select>                   
                </div>
                <button type="submit" className="btn btn-primary">Convert</button>
                <div className="mb-3">
                    <label htmlFor="unit1" className="form-label p-2">Result</label>
                    <input className="form-control" type="text" value={this.props.m} aria-label="readonly input example" readOnly/>
                </div>
            </form>
        </div>
    </>
    )
   }
}
export default Form