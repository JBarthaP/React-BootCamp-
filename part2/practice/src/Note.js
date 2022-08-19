/*
Theres two ways of exporting modules, by default using the following declaration
export default Note;

or you can use reference exportation
export const Note = (...)

Using the default version you dont have to know the name of the module
while on the reference exportation you need to know it
In the other component where you use it you would have to reference like this:

import {Note} from './"nameOfthefile"/.js'
*/

/*
You normally not use a object as a prop
If you have attributes only in one of your objects, use defaultValues
Note = ({content,date, categories = []}) => {...}
*/
export const Note = ({ content,date }) => {
    return (
      <li>
        <p>{content}</p>
        <small>
          <time>{date}</time>
        </small>
      </li>
    )
  }
