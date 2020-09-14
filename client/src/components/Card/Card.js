import React, {useRef, useEffect, useState} from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon, MDBCol, MDBView, MDBCardImage, MDBBtn } from "mdbreact";
import ContentEditable from 'react-contenteditable';
import Pdf from "react-to-pdf";
import Valentine from "../Valentine";

const CardExample = ({ card, onClick }) => {
  const icons = {
    Birthday: { icon: "birthday-cake", color: "" },
    Christmas: { icon: "tree", color: "" },
    Valentine: { icon: "heart", color: "" },
    Hanukkah: { icon: "menorah", color: "" },
  };

  const images = {
    Birthday: { src: "https://www.happybirthdaymsg.com/wp-content/uploads/2016/01/happy-birthday-image-10.jpg", color: "" },
    Christmas: { src: "https://easyfood.ie/wp-content/uploads/2018/12/Fun-facts-Christmas-food.jpg", color: "" },
    Valentine: { src: "https://storage.googleapis.com/burbcommunity-aroundambler/2020/01/valentines-day-header-1024x576.jpg", color: "" },
    Hanukkah: { src: "https://media.istockphoto.com/photos/happy-hanukkah-picture-id864602150", color: "" },
  }
  
  const [state, setState] = useState(card.text);
  const contentEditable = useRef();
  const ref = React.createRef();

  useEffect(() => {setState(card.text)}, [card]);

  const handleChange = evt => {
    setState(evt.target.value);
  };

  return (
    <MDBCol md='4'>
      <Pdf targetRef={ref} filename="card.pdf">
              {({toPdf}) => (
                  <MDBBtn className='unique' onClick={toPdf}>Download</MDBBtn>
              )}
      </Pdf> 
      <MDBCard narrow ref={ref}>
        <MDBView cascade>
          <MDBCardImage
            hover
            overlay='white-slight'
            className='card-img-top'
            src={images[card.occasion] ? images[card.occasion].src : "tree"}
            alt='food'
          />
        </MDBView>

        <MDBCardBody>
          <h6 className='pink-text'>
            <MDBIcon
              size="4x"
              className="text-center"
              icon={icons[card.occasion] ? icons[card.occasion].icon : "tree"}
            />
          </h6>

          <MDBCardTitle>{card.occasion}</MDBCardTitle>
          <MDBCardText>
            <ContentEditable
              innerRef={contentEditable}
              html={state} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
            />
          </MDBCardText>

          {/* <ReactToPdf targetRef={ref} filename="card.pdf">
              {({toPdf}) => (
                  <MDBBtn className='unique' onClick={toPdf}>Download</MDBBtn>
              )}
          </ReactToPdf>          */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol >
  );
}


// CardExample.defaultProps = {
//   card: {
//     occasion: "birthday",
//   },
// };
export default CardExample;
