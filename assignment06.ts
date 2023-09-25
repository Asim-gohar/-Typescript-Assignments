type subjectMarksType = {midterm: number, final: number,}
interface addressType  {
    street: string,
    city: string,
    postalCode: number,
}
interface gradesTypes {
  math: subjectMarksType ,
   science: subjectMarksType,
  } 

interface contactType {email: string , phone: number} ;

 interface complexObjectTypes {
  name : string ,
  age: number ,
  isStudent: boolean ,
  interests: string[] ,
  address: addressType ,
  grades: gradesTypes ,
  contact : contactType ,
  tuple: [number, string, boolean] ,
  functionExample: (x : number) => number ;
 }
const complexObject : complexObjectTypes = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  interests: ["programming", "music", "hiking"],
  address: {
    street: "123 Main St",
    city: "Exampleville",
    postalCode: 12345,
  },
  grades: {
    math: {
      midterm: 85,
      final: 92,
    },
    science: {
      midterm: 78,
      final: 88,
    },
  },
  contact: {
    email: "john.doe@example.com",
    phone: 1234567890,
  },
  tuple: [1, "two", true],
  functionExample: function (x) {
    return x * 2;
  },
};

console.log(typeof complexObject)
