class Task extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let class_name = 'task'
        class_name += this.props.done ? 'task-success' : 'task-infos';
        return (
            <div className={class_name}>
                <span>{this.props.value}</span>
                <i className="close">&times;</i>
            </div>
        )
    }
}

class App extends React.Component {
    tasksArray = [
        { value: 'Tache1', done: true },
        { value: 'Tache2', done: false },
        { value: 'Tache3', done: false },
    ];

    constructor(props) {
        super(props)
    }

    render() {
        let taskArrayMap = this.tasksArray.map((task, i) => {
            return (
                <Task
                    key={i}
                    value={task.value}
                    done={task.done}
                />
            )
        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>Mes taches</h1>
                        <form id="form-add" className="form-horizontal">
                            <div className="input-group">
                                <input type="text" id="addInput" className="form-control" placeholder="Description de la tâche..." />

                                <div className="input-group-btn">
                                    <button type="submit" className="btn btn-default">
                                        <span className="glyphicon glyphicon-plus-sign"></span>
                                    </button>
                                </div>
                            </div>
                        </form>

                        {tasksArrayMap}
                    </div>
                </div>
            </div>

        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));