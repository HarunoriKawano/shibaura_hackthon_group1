import React from 'react'
import styled from 'styled-components';

type Props = {
    state: string;
    color: string;
    item: string;
}

const style = {
    width: "48.87px",
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center",
    margin: "0 auto"
}

const ParamIcon = (props: Props) => {
  return (
    <>
        {props.item === 'run' ? (
            <div style={style}>
                <DistanceIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.399" height="10.226" viewBox="0 0 26.399 10.226">
                        <g id="グループ_19" data-name="グループ 19" transform="translate(-163.279 -376.409)">
                            <path id="arrow-ios-back-fill" d="M16.252,17.724a.73.73,0,0,1-.57-.27l-3.528-4.382a.73.73,0,0,1,0-.928l3.652-4.382a.731.731,0,1,1,1.125.935l-3.265,3.915,3.155,3.915a.73.73,0,0,1-.57,1.2Z" transform="translate(151.29 368.911)" fill={props.color}/>
                            <path id="arrow-ios-back-fill-2" data-name="arrow-ios-back-fill" d="M4.263,10.226a.73.73,0,0,1-.57-.27L.166,5.573a.73.73,0,0,1,0-.928L3.818.264A.731.731,0,1,1,4.943,1.2L1.678,5.113,4.833,9.028a.73.73,0,0,1-.57,1.2Z" transform="translate(189.677 386.635) rotate(180)" fill={props.color}/>
                            <line id="線_4" data-name="線 4" x2="24.957" transform="translate(163.999 381.535)" fill="none" stroke={props.color} stroke-width="1.5"/>
                        </g>
                    </svg>
                </DistanceIcon>
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.814" height="29.064" viewBox="0 0 19.814 29.064">
                    <g id="_i_icon_14808_icon_148080" transform="translate(-81.475)">
                        <path id="パス_13" data-name="パス 13" d="M192.391,5.622a2.811,2.811,0,1,0-2.811-2.811A2.811,2.811,0,0,0,192.391,5.622Z" transform="translate(-101.968)" fill={props.color}/>
                        <path id="パス_14" data-name="パス 14" d="M101.109,126.514l-1.864-2.8a5.207,5.207,0,0,0-1.753-1.6l-3.655-2.047a3.1,3.1,0,0,0-1.813-.426l-1.749.238a2.6,2.6,0,0,0-1.664.93l-3.329,3.543-3.049,1.124a1.157,1.157,0,0,0-.705,1.428l.014.045a1.157,1.157,0,0,0,1.365.784l2.485-.574a5.19,5.19,0,0,0,1.735-.754l1.728-1.162.611,4.64a1.568,1.568,0,0,1-.2.984L84.1,139.848a1.344,1.344,0,0,0,.488,1.832l.045.026a1.344,1.344,0,0,0,1.778-.391l5.784-8.274,1.752,3.5a2.6,2.6,0,0,0,.508.7l3.888,3.8a1.312,1.312,0,0,0,1.782.049l.062-.054a1.312,1.312,0,0,0,.112-1.865l-3.283-3.657-1.783-6.454-.007.005-.512-5.049,1.807.814,2.89,3.042a1.073,1.073,0,0,0,1.387.145l.03-.02A1.073,1.073,0,0,0,101.109,126.514Z" transform="translate(0 -112.824)" fill={props.color}/>
                    </g>
                    </svg>
                </Icon>
            </div>
            
        ) : props.item === 'walk' ? (
            <div style={style}>
                <ClockIcon>
                    <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                        <path id="パス_16" data-name="パス 16" d="M12.5,23.438A10.938,10.938,0,1,0,1.563,12.5,10.938,10.938,0,0,0,12.5,23.438ZM25,12.5A12.5,12.5,0,1,1,12.5,0,12.5,12.5,0,0,1,25,12.5Z" fill={props.color} fill-rule={props.color}/>
                        <path id="パス_17" data-name="パス 17" d="M16.531,6.75a.781.781,0,0,1,.781.781v8.141l5.075,2.9a.781.781,0,0,1-.775,1.356L16.144,16.8a.781.781,0,0,1-.394-.678V7.531A.781.781,0,0,1,16.531,6.75Z" transform="translate(-4.812 -2.062)" fill={props.color} fill-rule={props.color}/>
                    </svg>
                </ClockIcon>
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.814" height="29.064" viewBox="0 0 19.814 29.064">
                    <g id="_i_icon_14808_icon_148080" transform="translate(-81.475)">
                        <path id="パス_13" data-name="パス 13" d="M192.391,5.622a2.811,2.811,0,1,0-2.811-2.811A2.811,2.811,0,0,0,192.391,5.622Z" transform="translate(-101.968)" fill={props.color} />
                        <path id="パス_14" data-name="パス 14" d="M101.109,126.514l-1.864-2.8a5.207,5.207,0,0,0-1.753-1.6l-3.655-2.047a3.1,3.1,0,0,0-1.813-.426l-1.749.238a2.6,2.6,0,0,0-1.664.93l-3.329,3.543-3.049,1.124a1.157,1.157,0,0,0-.705,1.428l.014.045a1.157,1.157,0,0,0,1.365.784l2.485-.574a5.19,5.19,0,0,0,1.735-.754l1.728-1.162.611,4.64a1.568,1.568,0,0,1-.2.984L84.1,139.848a1.344,1.344,0,0,0,.488,1.832l.045.026a1.344,1.344,0,0,0,1.778-.391l5.784-8.274,1.752,3.5a2.6,2.6,0,0,0,.508.7l3.888,3.8a1.312,1.312,0,0,0,1.782.049l.062-.054a1.312,1.312,0,0,0,.112-1.865l-3.283-3.657-1.783-6.454-.007.005-.512-5.049,1.807.814,2.89,3.042a1.073,1.073,0,0,0,1.387.145l.03-.02A1.073,1.073,0,0,0,101.109,126.514Z" transform="translate(0 -112.824)" fill={props.color} />
                    </g>
                    </svg>
                </Icon>
            </div>
            
        ) : (
            <div style={style}>
                <ClockIcon>
                    <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                        <path id="パス_16" data-name="パス 16" d="M12.5,23.438A10.938,10.938,0,1,0,1.563,12.5,10.938,10.938,0,0,0,12.5,23.438ZM25,12.5A12.5,12.5,0,1,1,12.5,0,12.5,12.5,0,0,1,25,12.5Z" fill={props.color} fill-rule={props.color}/>
                        <path id="パス_17" data-name="パス 17" d="M16.531,6.75a.781.781,0,0,1,.781.781v8.141l5.075,2.9a.781.781,0,0,1-.775,1.356L16.144,16.8a.781.781,0,0,1-.394-.678V7.531A.781.781,0,0,1,16.531,6.75Z" transform="translate(-4.812 -2.062)" fill={props.color} fill-rule={props.color}/>
                    </svg>
                </ClockIcon>
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.212" height="24.857" viewBox="0 0 22.212 24.857">
                        <g id="_i_icon_13772_icon_137720" transform="translate(-27.248)">
                        <path id="パス_15" data-name="パス 15" d="M49.363,21.147a17.127,17.127,0,0,1-1.123-1.966s.13-.167,0-.731c-.169-.73-.9-.674-1.067-.842s-1.629-2.836-1.741-3.146-1.348-3.819-1.348-3.819c-.415-1.826-1.18-2.584-2.191-2.809s-1.545-.169-1.994-.562c-.281-.245-.271-.428-.271-1.168a3.2,3.2,0,0,0,.524-.686,4.427,4.427,0,0,0,.376-1.112c.253-.1.256-.227.365-.629.151-.556.141-.938-.264-.938C40.725.926,39.815,0,38.354,0s-2.37.926-2.275,2.74c-.4,0-.416.381-.264.938.109.4.112.528.365.629a4.407,4.407,0,0,0,.377,1.112,3.205,3.205,0,0,0,.524.686c0,.74.009.923-.271,1.168-.449.393-.992.339-1.993.562s-1.776.983-2.191,2.809c0,0-1.236,3.51-1.348,3.819S29.7,17.44,29.536,17.608s-.9.112-1.067.842c-.13.563,0,.731,0,.731a17.048,17.048,0,0,1-1.124,1.966c-.337.393.281.674.674.168a.614.614,0,0,0,.378.141c-1.37,1.517-.589,3.494,1.532,3.4,1.739-.079,8.425-1.292,8.425-1.292s6.686,1.213,8.425,1.292c2.121.1,2.9-1.88,1.531-3.4a.614.614,0,0,0,.379-.141C49.082,21.821,49.7,21.54,49.363,21.147ZM34.816,18.636a47.119,47.119,0,0,0-4.67,1.662c.369-.687.794-1.623.794-1.623l1.8-2.583,1.432-3.118s.449,1.685.589,1.938A33.746,33.746,0,0,1,34.816,18.636Zm7.077,0a33.913,33.913,0,0,1,.056-3.724c.141-.253.59-1.938.59-1.938l1.432,3.118,1.8,2.583s.426.936.795,1.623A47.109,47.109,0,0,0,41.893,18.636Z" transform="translate(0)" fill={props.color}/>
                        </g>
                    </svg>
                </Icon>
            </div>
            
        )}

    </>
  )
}

const Icon = styled.div`
    width: 19.81px;
    height: 29.06px;
`;

const DistanceIcon = styled.div`
    width: 26.4px;
    height: 10.23px;
`;

const ClockIcon = styled.div`
    width: 25px;
    height: 25px;
`;

export default ParamIcon