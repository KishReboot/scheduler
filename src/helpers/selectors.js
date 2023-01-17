const matchingAppointments = (appointments, ids) => {
  
  const match = ids.map(id => appointments[id]);
  
  return match;

};

export function getAppointmentsForDay(state, day) {
  
  let appointmentArray = [];
  
  state.days.map(days => {
    
    if (days.name === day) {
      days.appointments.forEach(appointmentId => appointmentArray.push(appointmentId))
    }
  })
  
  return matchingAppointments(state.appointments, appointmentArray);
};