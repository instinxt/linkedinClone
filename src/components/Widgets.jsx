import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle(
                'Industry5.0: Automation, AI and AGI',
                'Top news - 9989 readers'
            )}
            {newsArticle('Moving from AI to SGI',
                'Top news - 9979 readers'
            )}
            {newsArticle(
                'The Civilization 2.0 has just begun',
                'Top news - 9989 readers'
            )}
            {newsArticle(
                'Wind energy: harnessing the moons gravity',
                'Top news - 9989 readers'
            )}
            {newsArticle(
                'Starlink: connecting the world',
                'Top news - 9989 readers'
            )}
        </div>
    );
}

export default Widgets;