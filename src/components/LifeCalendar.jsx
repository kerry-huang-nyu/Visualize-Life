
const years = [1940, 1950, 1955, 1959, 2000, 2010, 2015, 2019];

const findClosestYear = (birthdayYear) => {
  let closestYear = years[0];
  let minDifference = Math.abs(birthdayYear - closestYear);

  for (const year of years) {
    const difference = Math.abs(birthdayYear - year);
    if (difference < minDifference) {
      minDifference = difference;
      closestYear = year;
    }
  }

  return closestYear;
};

const calculateYears = (birthday, gender, country) => {
    // Example calculation
    
    //find the birth year, then 
    //1940, 1950, 1955, 1959, 2000, 2010, 2015, 2019

    //find the birth year you are closest to, then calculate the years 





    const totalYears = 0;
    const healthyYears = 90;
  
    return { totalYears, healthyYears };
};


const CheckBox = ({age, list}) => {


    //just by country 
    const totalYears = () => {

    }


    return (
        <>
        </>
    )
};


const Calendar = ({display, age, list}) => {

    const renderContent = () => {
        if (display === null) return <h1>Hi</h1>;
        else if (display === 'hello') return <h1>Bello</h1>;
        else return <h1>Hello</h1>;
    };


    return (
        <>
            {renderContent()}
        </>
    )
};


export default Calendar;