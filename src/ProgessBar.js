import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './ProgressBar.css';



const ProgressBar = () => {

    const [percentage, setPercentage] = useState(0);
    const [boxPercentage, setBoxPercentage] = useState(0);
    const [start, setStart] = useState(false);
    const [reset, setReset] = useState(false);
    const [change, setChange] = useState(true);

    useEffect(() => {
        if(start) {
            if(percentage < 100) { 
                setTimeout(() => setPercentage(percentage + (100/15) ), 500);
                setTimeout(() => setBoxPercentage(boxPercentage + 1 ), 500);
            }
        }
        if(reset) {
            setPercentage(0);
            setBoxPercentage(0);
            setStart(false);
        }
    }, [percentage,start,reset,boxPercentage]);
    

    return (
        <div className="MainDiv">  
            <h1 className="MainTitle" > Progress Bar </h1>
            <Progress percentage={percentage} change={change} boxPercentage={boxPercentage} />
            <div style={{ marginTop: '20px' }}>  
                <Button
                    onClick={()=>{
                        setStart(true);
                        setReset(false);
                    }}
                >
                    Start
                </Button>
                <Button
                    onClick={()=>setStart(false)}
                >
                    Stop
                </Button>
                <Button
                    onClick={()=>setReset(true)}
                >
                    Reset
                </Button>
            </div>
            <Button
                onClick={()=>setChange(!change)}
            >
                Change
            </Button>   
        </div>
    ) 
}
  
const Progress = (props) => {

    const defaultProps = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
        style: { width: '1rem', height: '1rem' },
      };

      let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    return (
        <>
        {props.change ? 
        <Box display="flex" justifyContent="center">
            {
                arr.map((item,index) => 
                <Box key={item} borderColor="text.primary" {...defaultProps} 
                    bgcolor={props.boxPercentage >= index + 1  && "#81c784" }/> 
                )
            }
        </Box> 
        :         
        <div className="progress-bar">
            <Filler percentage={props.percentage} />
        </div>
        }
        </>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }
  
 
export default ProgressBar;
