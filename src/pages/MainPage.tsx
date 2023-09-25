import StudentCounter from "../components/StudentCounter";

function MainPage() {
    



    return (
        <>
            <div className="mainDiv">
                <button type="button" className="btn btn-primary attendanceExit" >Close Attendance</button>
                <h1 style={{fontSize:30}}>Attendance Code:</h1>
                <h1 style={{fontSize:135, fontWeight:"bold", textShadow:"5px 10px 10px #0000001e"}}>X4DH3</h1>
                <h1 style={{fontSize:30, fontStyle:"italic"}}>{"Please go to <sitename.com> and enter the code"}</h1>
                <StudentCounter></StudentCounter>

            </div>
        
        </>
    )
}

export default MainPage;