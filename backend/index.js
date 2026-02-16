const exp = require("express")
const app = exp()
const cors = require("cors");
app.use(exp.json())
app.use(cors());


const connection = require("./config/db.js")

connection()
app.get('/test', (req, res) => {
    res.send("I am from backend")

})
const Registerstudent = require("./models/StudentSignup")
const Registerinstructor = require("./models/InstructorSignup.js")
const Studentenrollment = require("./models/Enrollment.js")
app.post("/Adduser", async (req, res) => {
    try {

        if (req.body.role == "STUDENT") {
            const { name, email, password, role } = req.body;
            const existing = await Registerstudent.find({ email: email })
            if (existing.length > 0) return res.json({ msg: "Email already exists" })
            const student = new Registerstudent({
                name, email, password, role
            })
            await student.save()
            res.json({ msg: "Student Added" })
        }

        else if (req.body.role == "INSTRUCTOR") {
            const { name, email, password, role } = req.body;
            const existing = await Registerinstructor.find({ email: email })
            if (existing.length > 0) return res.json({ msg: "Email already exists" })
            const instructor = new Registerinstructor({
                name, email, password, role
            })
            await instructor.save()
            res.json({ msg: "Instructor Added" })
        }
        else {
            res.json({ msg: "Provide Role" })
        }
    } catch (error) {
        res.status(500).json({ msg: "Error saving data" });
    }
});


app.post("/login", async (req, res) => {
    try {

        if (req.body.role === "STUDENT") {
            const { email, password, role } = req.body
            const studentdata = await Registerstudent.findOne({ email: req.body.email })
            console.log(studentdata)

            if (!studentdata) return res.json({ msg: "No student data for " + email })

            if (studentdata.email == email && studentdata.password == password) {
                return res.json({ msg: "valid", userdata: studentdata })
            }
            return res.json({ msg: "not valid" })
        }
        else if (req.body.role === "INSTRUCTOR") {
            const { email, password, role } = req.body
            const instructordata = await Registerinstructor.findOne({ email })
            console.log(instructordata)

            if (instructordata) {
                if (instructordata.email == email && instructordata.password == password) {
                    res.json({ msg: 'valid', userdata: instructordata })
                }
            } else {
                res.json({ msg: "No instructor account for " + email })
            }
        }
        else {
            res.json({ msg: "Please provide valid role" })
        }
    } catch (err) {
        res.json({ msg: err.message })
        console.log(err.message)
    }
})

// Instructor Courses api
// add course api 

const addcourse = require("./models/InstructorCourses.js")
app.post("/Addcourse", async (req, res) => {


    try {
        const { instructorid, instructorname, coursename, category, description, price } = req.body;
        const course = new addcourse({
            instructorname,
            instructorid,
            coursename,
            category,
            description,
            price
        })
        await course.save();
        res.json({ msg: "Course Added" })
    }
    catch (err) {
        res.json({ msg: err.message })
        console.log(err.message)
    }
})

// Fetching particular courses of a instructor

app.get("/Addcourse/:id", async (req, res) => {
    try {
        const mycourses = await addcourse.find({ instructorid: req.params.id })
        res.json(mycourses)
    }
    catch (err) {
        res.json({ msg: err.message })
        console.log(err.message)
    }
})


app.delete("/Deletecourse/:id", async (req, res) => {
    try {
        const course = await addcourse.findByIdAndDelete(req.params.id);


        res.json({ msg: "Course deleted successfully" });
    } catch (err) {
        res.json({ msg: err.message });
    }
});


app.get("/Admincourse", async (req, res) => {
    try {
        const allcourses = await addcourse.find();
        res.json(allcourses);
    } catch (err) {
        console.log(err.message);
        res.json({ msg: err.message });
    }
});

// app.delete("/Deletecourse/:id", async (req, res) => {
//   await Course.findByIdAndDelete(req.params.id);
//   res.json({ msg: "Course Deleted" });
// });

app.put("/Updatecourse/:id", async (req, res) => {
    try {
        await addcourse.findByIdAndUpdate(req.params.id, req.body);
        res.json({ msg: "Course Updated Successfully" });
    } catch (err) {
        res.json({ msg: err.message });
    }
});


// admin user
app.get("/adminusers", async (req, res) => {
    try {
        const students = await Registerstudent.find()
        const instructors = await Registerinstructor.find()
        const allusers = [...students, ...instructors]
        res.json({ students, instructors, allusers })
    }
    catch (err) {
        res.json({ msg: err.message })
        console.log(err.message)
    }
})

// Fetch single course by ID
app.get("/course/:id", async (req, res) => {
    try {
        const course = await addcourse.findById(req.params.id);

        if (!course) {
            return res.json({ msg: "Course not found" });
        }

        res.json(course);
    } catch (err) {
        res.json({ msg: err.message });
    }
});

// Api for Enrollment
app.post("/course/enrollment", async (req, res) => {
  try {
    const {
      studentid,
      studentname,
      instructorid,
      instructorname,
      courseid,
      coursename,
      coursecategory,
      price,
      role
    } = req.body;

    // Make role case-insensitive
   
    const student = new Studentenrollment({
      studentid,
      studentname,
      instructorid,
      instructorname,
      courseid,
      coursename,
      coursecategory,
      price,
      role
    });

    await student.save();

    return res.json({ msg: "Enrollment Done" });

  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});












const port = 5000;
app.listen(port, () => {

    console.log("Server is running on port number" + port)
})