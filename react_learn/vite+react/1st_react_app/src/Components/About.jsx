import React from 'react'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function About() {

    const handleOnClick = ()=>{
        if(theme === "Change Theme to light!!")
        {
            setStyle({
                textAlign : "centre",
                paddingLeft : "9rem",
                paddingRight : "9rem",
                marginTop : "50px",
                backgroundColor : "white",
                border : "solid black"
            });
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            setTheme("Change Theme to dark!!");
            toast.success("Theme changed to light!!",{autoClose: 1500,});
            document.title = "TextUtils - Light mode";

        }
        else
        {
            setStyle({
                textAlign : "centre",
                paddingLeft : "9rem",
                paddingRight : "9rem",
                marginTop : "50px",
                backgroundColor : "#1e1b26",
                border : "solid white",
                color : "white"
            });
            document.body.style.backgroundColor = "#1e1b26";
            document.body.style.color = "white";
            setTheme("Change Theme to light!!");
            toast.success("Theme changed to dark!!",{autoClose: 1500,});
            document.title = "TextUtils - Dark mode";
            

        }
    }

    const [theme, setTheme] = useState("Change Theme to dark!!");
    const [style1, setStyle] = useState({
                textAlign : "centre",
                paddingLeft: "9rem",
                paddingRight: "9rem",
                marginTop: "50px",
                backgroundColor: "white",
                border: "solid black"
    });

  return (
  <>
    <div style={style1}>
        <h1>About Us</h1>
        <p style={{textAlign : 'justify'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit nihil possimus ipsum corrupti neque beatae labore cum eveniet ratione ipsam fugiat, dolores dicta qui nostrum ea iusto minima error dolorum. Necessitatibus voluptatem in omnis ullam rem amet, assumenda enim architecto dolores soluta nulla earum vitae, repudiandae provident! Consequuntur nobis tenetur sed corporis, ex dolores ipsa quos quaerat eius fuga quia illum dolore voluptatum maiores, nulla eos. Neque officiis exercitationem nulla rem delectus corporis iure fugiat nihil? Est quaerat, recusandae, non repellat facere doloribus totam voluptatum natus nostrum eius minima, amet eum asperiores officiis quam exercitationem. Minus sit distinctio vel, architecto minima libero, labore fugit eum nisi sint temporibus incidunt aliquid? Nobis pariatur natus laborum adipisci a hic, officia ea itaque nam asperiores, inventore dolore animi dolores! Quod quidem, temporibus quos consectetur assumenda sit quia obcaecati debitis adipisci ipsam quas at et sequi dignissimos delectus rem alias, rerum odit officia esse porro nesciunt eius nemo sint! Laudantium exercitationem esse animi eligendi fugiat sint pariatur placeat vero hic quis voluptates, dicta id quia sed voluptas. Ea tempore fugit mollitia, neque quaerat obcaecati ipsam amet voluptatum. Voluptatibus voluptatem ut laboriosam corrupti, reprehenderit iste, at vitae praesentium similique modi quaerat distinctio consequatur in autem labore <br /> <br /> facilis saepe velit ex! Cupiditate magnam soluta repudiandae hic iste tempore reprehenderit distinctio earum nisi obcaecati ex neque, molestiae recusandae necessitatibus tenetur omnis eligendi, maxime iusto nam voluptatem perspiciatis. Corrupti possimus soluta voluptas odit. Recusandae nobis ut quisquam officiis sint! Cumque perferendis deleniti, neque qui amet earum ipsum eaque cupiditate exercitationem hic saepe dignissimos veritatis, ducimus animi odit modi corporis enim aliquam est facere placeat. Inventore, dicta cum labore nobis, fugit iste autem maiores nostrum voluptate, sequi ullam voluptatem voluptatum? Commodi delectus voluptatem, eum doloremque minus possimus facilis nostrum aliquid odio ipsum perspiciatis odit repellat beatae nulla sint, provident maxime pariatur voluptas vitae esse distinctio. Repudiandae accusantium est aliquam totam illo consectetur adipisci nulla placeat recusandae autem. Error excepturi iusto aut consequuntur deserunt modi magni, officiis quidem. Aut dicta deleniti ex, maxime in natus. Quo dolor hic fugiat dolore, atque porro iste repellat, autem a expedita harum ipsum. Atque laborum perspiciatis quam odit at reprehenderit molestiae nulla eius repellendus animi, id aspernatur mollitia! Ipsum distinctio reiciendis temporibus aut deleniti. Dolorum obcaecati quis asperiores iure quae similique temporibus. Id unde accusantium quia eaque magnam dolore exercitationem modi, corrupti praesentium? Fugit quas facere impedit quos incidunt ipsam iusto suscipit ut.
        </p>
    
        
        <button onClick={handleOnClick} style={{backgroundColor:"orange"}}>{theme}</button>

        <div className="form-check form-switch"  onChange={handleOnClick}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
        </div>


    </div>

       
  
  
  </>
  )
}
