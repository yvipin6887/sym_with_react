import React,{Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'
import axios from "axios";

const options = [
  { value: '10Th', label: '10Th' },
  { value: '12Th', label: '12Th' },
  { value: 'graduation', label: 'Graduation' },
  { value: 'postgraduation', label: 'Post Graduation' },
  { value: 'other', label: 'Other' }
]

class AddUserForm extends Component{
     
    constructor(props) {
        super(props);
        this.state = {name: '', email:'', password:'',contact:'', qualification:'', gender:1, profileImage:'',checkOut:false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event,actionMeta=undefined) {
        console.log(event.target.type);
       if(actionMeta !==undefined){
        this.setState({[actionMeta.name]: event.value});
        }else if(event.target.type=='file'){
          let reader= new FileReader();
          reader.readAsDataURL(event.target.files[0]);
           reader.onload = (e) =>{
            document.querySelector('#profileDisplay').setAttribute('src', e.target.result);
          }
          let dataImage = document.querySelector('#profileDisplay').getAttribute('src');
          // this.setState({profileImage: dataImage});
          this.setState({ profileImage: event.target.files[0] });
        }else{
          const targetValue=event.target.type==='checkbox' ? event.target.checked:event.target.value;
          this.setState({[event.target.name]: targetValue});
        }
      }

     
      
    
      handleSubmit(event) {
         event.preventDefault();
        console.log(this.state);
        const formData = new FormData(); 
        formData.append( "profileImage", this.state.profileImage );
        formData.append( "name", this.state.name );
        formData.append( "email", this.state.email);
        formData.append( "password", this.state.password );
        formData.append( "contact", this.state.contact );
        formData.append( "qualification", this.state.qualification );
        formData.append( "gender", this.state.gender );
        formData.append( "checkOut", this.state.checkOut );
        // const formData = {profileImage:this.state.profileImage, name:this.state.name};



        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
      //   axios.post();
        // const json = JSON.stringify(this.state);
        const res = axios.post('https://127.0.0.1:8000/api/add-users', formData,config).then((response) => {
          console.log(response.data);
        });
      }
    
      render() {
        return (
            <div className="container">
            <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicName" >
                      <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicGender">
                        <Form.Check inline type="radio" label="Male" id="genderMale" name="gender" value="1" checked={this.state.gender==1} onChange={this.handleChange} />
                        <Form.Check inline type="radio" label="Female" id="genderFemale" name="gender" value="0" checked={this.state.gender==0} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="md-3 col-lg-5" controlId="formBasicContact">
                      <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" placeholder="Enter Contact" name="contact" value={this.state.contact} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className="md-3 col-lg-5" controlId="formqualification">
                      <Form.Label>Qualification</Form.Label>
                      <Select
                      defaultValue={this.state.qualification} name="qualification"
                        onChange={this.handleChange}
                        options={options}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicImage" >
                      <Form.Label>Image</Form.Label>
                          <Form.Control type="file"  name="profileImage"  onChange={this.handleChange}/>
                          <img src="" id="profileDisplay" width="40%"  />
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-5" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" name="checkOut" checked={this.state.checkOut} onChange={this.handleChange} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
          </div>
        );
      }
    
}
export default AddUserForm;