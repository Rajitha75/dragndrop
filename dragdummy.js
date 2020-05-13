import React, { useEffect, useState } from 'react';
import WidgetService from '../../../Services/QueenBase/Widget/WidgetService';

function Dashboard() {
	const [widgetData, setwidgetData] = useState([]);
    const [widgetItem, setWidgetItem] = useState({});
	useEffect(()=>{
		getWidgetData();
	},[]);

    const getWidgetData = async () => {
			var wData=await WidgetService.get().getWidgetData();
            setwidgetData(wData);
    }

	const FetchWidgetData = async(widget) => {
		var res = await WidgetService.get().getData(widget);
		setWidgetItem({data:res});
		setIsGetData(true)
		return res
	}

	const GetData = (props) => {
		if(!isGetData){
		FetchWidgetData(props.data.widget);
		}
		return (
            <div>{widgetItem.data}</div>
        )
	}

	};
	const displayWidgetBoxes = () => {
		const sequenceArray = []
		widgetData && widgetData.forEach(element => {
				sequenceArray.push(element.sequence)
		})

		return sequenceArray.map((element,i) => {
			if (element) {
				return (<GetData data={element} />)
			}
		})
	}
		return (
		<div className='row wcont'>
			{displayWidgetBoxes()}
        </div>	
		);
}

Dashboard.propTypes = {
	data: PropTypes.object
};


export default Dashboard;
