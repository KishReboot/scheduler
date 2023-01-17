const matchingAppointments = (appointments, ids) => {
  
  const match = ids.map(id => appointments[id]);
  
  return match;

};

export default function getAppointmentsForDay(state, day) {
  
  let appointmentArray = [];
  
  state.days.map(dayObj => {
    
    if (dayObj.name === day) {
      dayObj.appointments.forEach(appointmentId => appointmentArray.push(appointmentId))
    }
  })
  
  return matchingAppointments(state.appointments, appointmentArray);
};

module.exports = { matchingAppointments, getAppointmentsForDay };