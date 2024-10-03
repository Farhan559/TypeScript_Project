import mongoose,{Schema,Document} from "mongoose";

export interface IUser extends Document{
    name:String;
    email:String;
    age:number;
}

const UserSchema: Schema = new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true , unique:true},
    age:{type:Number, required:true}
});

export default mongoose.model<IUser>('User',UserSchema);