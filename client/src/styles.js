import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'inline-block',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    display:'flex'
  },
  image: {
    height: "75px",
    width: "75px",
    margin: '0',
    marginLeft: '20px'
  },
}));