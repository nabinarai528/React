import otpGenerator from "otp-generator"

const generateOtp=()=>{
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialchars: false,
      lowerCaseAlphabets: false,


    })
    return otp;
}
   
    export default generateOtp;
