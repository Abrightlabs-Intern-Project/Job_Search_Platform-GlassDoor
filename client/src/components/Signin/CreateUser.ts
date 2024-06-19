import { useMutation } from "@apollo/client";
import { Createuser } from "../../queries";

function CreateUser(email:string,username:string,password:string,age:number,yearsOfExperience:number,location:string,preferedProfession:string){
    const [create, { data, loading, error }] = useMutation(Createuser);
console.log('in create ');
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  create({variables:{email:email , username:username,password:password,age:age,yearsOfExperience:yearsOfExperience,location:location,preferedProfession:preferedProfession}})
 console.log(data)


}

export default CreateUser