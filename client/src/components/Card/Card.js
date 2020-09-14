import React, {useRef} from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon, MDBCol, MDBView, MDBCardImage, MDBBtn } from "mdbreact";
import ContentEditable from 'react-contenteditable';

const CardExample = ({ card, onClick }) => {
  const icons = {
    Birthday: { icon: "birthday-cake", color: "" },
    Christmas: { icon: "tree", color: "" },
    Valentine: { icon: "heart", color: "" },
    Hanukkah: { icon: "menorah", color: "" },
  };

  const [state, setState] = React.useState({html: card.text});
  const contentEditable = useRef();
 
  const handleChange = evt => {
    setState({html: evt.target.value});
  };

  return (
    <MDBCol md='4'>
      <MDBCard narrow>
        <MDBView cascade>
          <MDBCardImage
            hover
            overlay='white-slight'
            className='card-img-top'
            src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
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
              html={state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
            /></MDBCardText>

          <MDBBtn className='unique' onClick={onClick}>Edit Message</MDBBtn>

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
