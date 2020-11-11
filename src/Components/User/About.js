import React from 'react'
import UserNav from './UserNav'
import AdminNav from '../Admin/AdminNav';
import { Container} from 'react-bootstrap'
import {connect} from 'react-redux';
import {getAdmin} from '../../redux/reducer';

function About(props) {
    return (
        <div>
            {props.admin.first_name ? <AdminNav/> :
           <UserNav />}
            <Container className="d-flex justify-content-center">
                <h1>Our Story:</h1>
            </Container>
            <Container>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis. Ut etiam sit amet nisl. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Interdum posuere lorem ipsum dolor sit. Vitae sapien pellentesque habitant morbi tristique senectus. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Feugiat in ante metus dictum at tempor commodo ullamcorper. Sed libero enim sed faucibus turpis in eu mi. Volutpat blandit aliquam etiam erat. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Enim nec dui nunc mattis enim. Non diam phasellus vestibulum lorem sed. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Fusce id velit ut tortor. Eget arcu dictum varius duis at consectetur. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Est lorem ipsum dolor sit amet consectetur.

                Nulla facilisi morbi tempus iaculis urna id volutpat. Velit dignissim sodales ut eu. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Pulvinar neque laoreet suspendisse interdum consectetur. Ipsum dolor sit amet consectetur adipiscing elit. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Duis ultricies lacus sed turpis tincidunt id. Orci eu lobortis elementum nibh tellus. Habitant morbi tristique senectus et netus et malesuada. Ullamcorper malesuada proin libero nunc consequat. Nunc sed velit dignissim sodales ut eu. Vestibulum mattis ullamcorper velit sed. Semper quis lectus nulla at volutpat diam ut venenatis tellus.

                Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Commodo viverra maecenas accumsan lacus. Mauris nunc congue nisi vitae suscipit tellus mauris a. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Enim neque volutpat ac tincidunt vitae semper. Suspendisse interdum consectetur libero id. Nibh mauris cursus mattis molestie a. Etiam sit amet nisl purus in mollis nunc. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Faucibus a pellentesque sit amet porttitor eget. Et malesuada fames ac turpis egestas sed. Lacus luctus accumsan tortor posuere ac. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nibh venenatis cras sed felis eget velit.

                Risus in hendrerit gravida rutrum quisque. Eget duis at tellus at urna condimentum mattis pellentesque. Neque convallis a cras semper auctor neque. Morbi quis commodo odio aenean. Convallis convallis tellus id interdum velit. Urna molestie at elementum eu. Diam ut venenatis tellus in metus. Elit ut aliquam purus sit amet. Enim sed faucibus turpis in. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Tincidunt eget nullam non nisi. Id donec ultrices tincidunt arcu non sodales. Eros donec ac odio tempor orci. Placerat in egestas erat imperdiet sed euismod nisi porta. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Sapien pellentesque habitant morbi tristique senectus. Eget sit amet tellus cras.
                </p>
            </Container>
            
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(About);
