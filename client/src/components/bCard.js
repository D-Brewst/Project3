import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

const CardExample = () => {
    return (
        <MDBRow>
            <MDBCol md='4'>
                <MDBCard wide cascade>
                    <MDBView cascade>
                        <MDBCardImage
                            hover
                            overlay='white-slight'
                            className='card-img-top'
                            src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
                            alt='Card cap'
                        />
                    </MDBView>

                    <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>Alice Mayer</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>Photographer</p>

                        <MDBCardText>
                            Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
                        </MDBCardText>

                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='!#' className='px-2 fa-lg li-ic'>
                                <MDBIcon fab icon='linkedin-in'></MDBIcon>
                            </a>

                            <a href='!#' className='px-2 fa-lg tw-ic'>
                                <MDBIcon fab icon='twitter'></MDBIcon>
                            </a>

                            <a href='!#' className='px-2 fa-lg fb-ic'>
                                <MDBIcon fab icon='facebook-f'></MDBIcon>
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

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
                        <h5 className='pink-text'>
                            <MDBIcon icon='utensils' /> Culinary
            </h5>

                        <MDBCardTitle className='font-weight-bold'>
                            Cheat day inspirations
            </MDBCardTitle>

                        <MDBCardText>
                            Sed ut perspiciatis unde omnis iste natus sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>

                        <MDBBtn color='unique'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard>
                    <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
                        alt='man'
                    />

                    <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>Billy Coleman</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>Wev developer</p>

                        <MDBCardText>
                            Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
                        </MDBCardText>

                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <MDBBtn rounded floating color='fb'>
                                <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
                            </MDBBtn>

                            <MDBBtn rounded floating color='tw'>
                                <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
                            </MDBBtn>

                            <MDBBtn rounded floating color='dribbble'>
                                <MDBIcon size='lg' fab icon='dribbble'></MDBIcon>
                            </MDBBtn>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default CardExample;