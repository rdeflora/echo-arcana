import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",background:"#0a0a0a",color:"#fff",padding:"64px"}}>
        <div style={{fontSize:64,fontWeight:900}}>Echo Arcana</div>
        <div style={{marginTop:12,fontSize:30,opacity:.85}}>Where magic gets weird</div>
      </div>
    ),
    size
  );
}
