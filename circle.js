const PI = 3.141592;

function getArea(radius){
    return PI * radius * radius;
}

function getCircumference(radius){
    return PI * 2 * radius;
}

export default{
    PI, 
    getArea, 
    getCircumference,
};