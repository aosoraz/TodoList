/* eslint-disable react/prop-types */
const ListTable = ({ priority, tasks, editTask }) => {

    function formatDate(dateString) {
        const months = [
            'Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'October', 'November', 'Desember'
        ];
    
        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        let hours = date.getHours();
        const minutes = date.getMinutes();
    
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12; 
        hours = hours ? hours : 12; 
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
        return `${day} ${month} ${year} ${hours}:${formattedMinutes} ${ampm}`;
    }

    return (
      <div className="p-5 shadow-md mb-5">
        <h2 className="text-xl font-bold mb-2">{priority} Priority</h2>
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id} onClick={() => editTask(task)}>
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{task.title}</td>
                <td className="border border-gray-300 px-4 py-2">{formatDate(task.deadline)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ListTable;
  