import "./singlepost.css";
import SinglepostPic from "./post-pic.jpg"

export default function singlepost() {
    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
                <img src={SinglepostPic} alt="" className="singlepost-img" />
                <h1 className="singlepost-title">Yash single post
                    <div className="singlepost-edit">
                        <i className="singlepost-icon fa-regular fa-edit"></i>
                        <i className="singlepost-icon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlepost-info">
                    <span className="singlepost-author">Author: <b>Yash</b></span>
                    <span className="singlepost-date">1 hour ago</span>
                </div>
                <p className="singlepost-desc">
                    cdwcwlkbla abukbva avehgc a agogoevv gvowW LFEHVFDUG7FAWS  CH8OSDHP;RGENRAOGARG FVTRAOHRBGGLVOGAR HOGISBPH9SB KSFSYABS KBDYIGSBSJPB  UAS AS,BUKDGDSU V,DS  FJLKHGFOUIHD DFBLH IHYA SHS SHATAMA AUASHAR,FKSBUOHSBDFKB UASH SJAR,MA BSU SKBGURGA HKAG YASSH DSHSAMR BISBSG  YASH SHSARRMA JBSBERRKG  GREBRGIEHEFJSYASH DJSUSD VDJBSKUSD   EUISEF   VSDHBSDVUBSD REKHA SHARMA GAJENDRA SHARMA FYASH SHAMA .
                </p>
            </div>
        </div>

    )
}
