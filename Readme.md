Project Name : Dev Stack Tool Selection Platform .
Description : This Project is bulit to show the most popular development stack so that a user a select their tool.
Technologies : HTML, TailwindCss, React.js
Three Features : (i) A user can select the technology from technology cart.
                (ii) A user can also see the the selected technology cart in selected technology part.
               (iii) A user can also delete the selected technology from the selected technology






(1) What is Jsx?
  Ans: Jsx refers to Javascript XML. Jsx supports to write HTML code inside the Javascript code. Without Jsx a project will become unreadable.
      Jsx increases the readability of the code.

(2) What is the difference between prop and state?
  Ans: Prop : Prop refers to Property. Prop are used to pass data from parent to child. props are read only meaning child can not change the value of Props.
       State : State ae used to store the value of a component. The value of the state can be changed . Each component has its own state.

(3) What does useState hook do ?  and where did you use it in this project?
  Ans : useState hook is used to store the vlaue of a variable of a component. useState has two parts, one is a variable and other is a function. The function is used to 
        change the value of the variable.

       In my project I use useState hook to store whether a technology is added or not. Again i use useState to store the selected technology.
(4) What does the useEffect hook do, and why did you need it to load the JSON data?
  Ans : useEffect is used to handle the outside dependencies. Common uses of useEffect are:
        (i)Fetching data from an API.
        (ii) Reading data from a json file.
        (ii) Setting up a timer

   useEffect load data based on a condition. If we need to load a data multiple times , in that case we can use useEffect hook.

(5) Why does every item in a .map() list need a unique key prop?
  Ans : Every item in a .map() list need a unique key prop so that react can identify which item has been changed, addded or removed.

(6) What is conditional rendering? Show one place you used it (example: the empty stack message).
  Ans : Conditional rendering means rendering a UI based on a condition. Conditional rendering is a very important concept . In react we can use three types of 
        conditional rendering. 

        In my project i use conditional rendering in several places:
        (i) I am checking whether a technology is selected or not based on isAdded state. If isAdded is true i disable the "Add to Stack" button.
        (ii) I used conditional rendering to show the selected technology . If selected array is (>0) then it will display the selected technology . otherwise this will
            show "Your stack is Empty"
(7) How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
  Ans : parent---> child :I can data from parent to child using props.
        Child---->parent  :A child can send information back to the parent by calling a function passed through props

        In my project : 
                     parent--> child 
                                   <Technology setSelected={setSelected} />


                    child----->parent
                                    setSelected((prev) => [...prev, technology]);

                     


            
