const matchingAppointments = (appointments, ids) => {
  
  const matching = ids.map(id => appointments[id]);
  
  return matching;

};

function getAppointmentsForDay(state, day) {
  
  let appointmentArray = [];
  
  state.days.map(days => {
    
    if (days.name === day) {
      days.appointments.forEach(appointmentId => appointmentArray.push(appointmentId))
    }

  })
  
  return matchingAppointments(state.appointments, appointmentArray);

};

module.exports = { getAppointmentsForDay };