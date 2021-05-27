import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
    renderError = ({error, touched}) => {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className} >
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                    <Field label='Enter Title' name='title' component={this.renderInput} />
                    <Field label='Enter Description' name='description' component={this.renderInput}/>
                    <button className='ui button primary'>Enviar</button>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.title) {
        errors.title = 'Digite!!!!! um Titulo'
    }
    if(!formValues.description) {
        errors.description = 'Digite!!!!!! uma descrição'
    }

    return errors
}

export default reduxForm({
    form: 'streamForm', 
    validate})(StreamForm)
