import React, { useContext } from "react";
import myImg from "../img/unsplash_xayCTz6N2nM.png"

export default function Bird() {

    return (
        <div className="section">
            <div className="pip">
                <div className="about">
                    <div className="about_item">
                        <div className="about_img">
                            <img src={myImg} alt="About" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="section_text">
                    <h3 className="sup">О центре</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dictum et aliquet sit
                        luctus mauris elementum interdum. Interdum id in id viverra metus, dignissim arcu nisl
                        porttitor. Non, condimentum morbi porttitor nec mauris vitae consequat mi. Viverra non
                        pellentesque id blandit gravida tristique. Non blandit rhoncus libero in diam cras sapien
                        elementum tristique. At id viverra nullam tincidunt urna dis venenatis.
                        At hendrerit pretium turpis leo sem quam in nibh egestas. Nulla vitae, mollis enim tincidunt
                        vitae. Lorem sed morbi sem donec nulla. Risus nullam lacus, velit, amet volutpat. Blandit at
                        risus proin adipiscing platea praesent. Quisque turpis purus est egestas nunc, facilisi. Ut
                        in.</p>
                </div>
            </div>
        </div>
    );
}
