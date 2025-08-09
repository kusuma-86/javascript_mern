
        function step1(callback){
            console.log("step 1 called");
            callback();
        }
        function step2(callback){
            console.log("step 2 called");
            callback();
        }
        function step3(callback){
            console.log("step 3 called");
            callback(); 
        }
        step1(()=>{
            step2(()=>{
                step3(()=>{
                    console.log("all steps called");
                })
            })
        });
        