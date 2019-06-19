import { LMSModel, SubjectsModel, TeachersModel, PupilsModel, GroupsModel, GradebooksModel } from './Modules/index';

(async () => {
  
  var obj = {
    "title": "string",
    "lessons": "number",
    "description": "string"
  }
    
  const history = new SubjectsModel({
    title: 'History',
    lessons: 24,
    description: "agwera"
  });
    
  // will return subjectId
  //console.log(history.id);
  
  const lms = new LMSModel();
  await lms.add(history);

  
  await lms.update(21, history);
  
  let data =  {
    "name": {
      "first": "Giorgi",
      "last": "Asanidze"
    },
    "image": "Surati",
    "dateOfBirth": "10.10.1998", // format date
    "emails": [
      {
        "email": "g_asanidze@cu.edu.ge",
        "primary": true
      }
    ],
    "phones": [
      {
        "phone": "597123456",
        "primary": true
      }
    ],
    "sex": "male",
    "subjects": [
      {
        "subject": "History"
      }
    ],
    "description": "There is no description.",
  };
  
  const teachers = new TeachersModel();
  let teacherId = "";

  
  teacherId = await teachers.add(data);

  // will return Teachers data including teacher's id
  const readteacher = await teachers.read(teacherId);

  // will update Teacher. This method should use the same validation as a constructor method
  const teacherId1 = teachers.update(teacherId, data)

  // will remove Teacher
  //await teachers.remove(teacherId)
  

  let pulitdata = {
    "name": {
      "first": "Giorgi",
      "last": "Asanidze"
    },
    "image": "Surati",
    "dateOfBirth": "10.20.1865", // format date
    "phones": [
      {
        "phone": "555444333",
        "primary": true
      }
    ],
    "sex": "male", // male OR female
    "description": "Agwera"
  };
  
  // Create new Pupil from Pupil's data
  const pupils = new PupilsModel();
  let pupilId = "";

    // Create a new pupil
    pupilId = await pupils.add(pulitdata);
    // will return Pupils data including pupil's id
    const showpupils = await pupils.read(pupilId)
  
    // will update Pupil. This method should use the same validation as a constructor method
    await pupils.update(pupilId, pulitdata)
  
    // will remove pupil
    //await pupils.remove(pupilId)
  
    
  const room = 236;
  const groups = new GroupsModel();
  let groupId = "";

  // Create a new group
  groupId = await groups.add(room);
  
  // Add this pupil to this group
  await groups.addPupil(groupId, pupils);

  // Remove this pupil from this group
  //await groups.removePupil(groupId, pupils);

  // Update room for this group
  await groups.update(groupId, {
    room: 237
  });

  // Read information about group
  await groups.read(groupId);

  // It will return array of groups
  await groups.readAll();

  
  const gradebooks = new GradebooksModel(groups, teachers, lms);
  const pupilId1 = pupilId;
  const teacherId2 = teacherId;
  const level = 1;


  // Create a new gradebook
  const gradebookId = await gradebooks.add(level, groupId);

  // Destroy all data inside this gradebook
  //gradebooks.clear();

  const record = {
    "pupilId": pupilId1,
    "teacherId": teacherId2,
    "subjectId": history.id,
    "lesson": 1,
    "mark": 9
  };

  gradebooks.addRecord(gradebookId, record);

  // Read information about oliver results
  const oliver = await gradebooks.read(gradebookId, pupilId);
  
  // Read information about all students in this gradebook
  const students = await gradebooks.readAll(gradebookId);
})()


