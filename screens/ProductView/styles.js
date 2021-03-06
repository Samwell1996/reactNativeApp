import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { headerHeight } from '../../styles/dimensions';

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    flex: 1,
  },
  containerBetween: {
    flexDirection: 'column',
  },
  shadowBottom: {
    position: 'absolute',
  },
  shadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    paddingTop: 20,
    height: headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    zIndex: 5,
  },
  icon: {
    color: colors.white,
    paddingHorizontal: 14,
  },
  containerPhotos: {
    overflow: 'hidden',
    height: 356,
    width: '100%',
  },
  date: {
    position: 'absolute',
    fontSize: 12,
    color: colors.white,
    flexWrap: 'wrap',
    left: 16,
    bottom: 8,
    opacity: 0.8,
  },
  title: {
    position: 'absolute',
    fontSize: 16,
    color: colors.white,
    bottom: 56,
    left: 16,
    fontWeight: 'bold',
    zIndex: 4,
  },
  price: {
    position: 'absolute',
    fontSize: 16,
    color: colors.white,
    bottom: 56,
    right: 16,
    fontWeight: 'bold',
    zIndex: 4,
  },
  containerLocation: {
    marginHorizontal: 16,
    zIndex: 4,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 52,
  },
  textLocation: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.8,
  },
  iconLocation: {
    color: colors.white,
    opacity: 0.8,
    marginHorizontal: 3,
    bottom: -1,
  },
  bottomContainer: {
    backgroundColor: colors.white,
    top: -25,
  },
  description: {
    color: colors.textColors,
    fontSize: 16,
    marginHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 6,
  },
  readMore: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 16,
    paddingBottom: 8,
  },
  containerLine: {
    backgroundColor: colors.white,
    width: '100%',
    height: 1,
    top: -25,
  },
  line: {
    marginHorizontal: 16,
    backgroundColor: colors.tabColorGrey,
    height: 1,
  },
  containerBottom: {
    backgroundColor: colors.white,
    top: -25,
    flexDirection: 'row',
    borderBottomColor: colors.tabColorGrey,
    borderBottomWidth: 1,
    marginBottom: 110,
  },
  containerAvatar: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    width: 48,
    height: 48,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  textAvatar: {
    paddingTop: 12,
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  textFullName: {
    paddingTop: 12,
    paddingBottom: 7,
    fontSize: 16,
    color: colors.textColors,
  },
  textPosts: {
    fontSize: 16,
    color: colors.textBlue,
  },
  containerPhoneMessage: {
    flexDirection: 'row',
    paddingBottom: 65,
  },
  containerForMessage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    backgroundColor: colors.textBlue,
    position: 'absolute',
    width: '80%',
    marginLeft: 48,
  },
  containerForPhone: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    backgroundColor: colors.phoneGreen,
    position: 'absolute',
    width: '80%',
  },
  phone: {
    justifyContent: 'center',
    width: '50%',
    bottom: 0,
    height: 48,
  },
  message: {
    justifyContent: 'center',
    width: '50%',
    bottom: 0,
    height: 48,
  },
  imageComponentGreen: {
    height: 48,
    width: 48,
    position: 'absolute',
    right: -1,
  },
  imageComponentBlue: {
    height: 48,
    width: 48,
    position: 'absolute',
    left: -1,
  },
  containerPhone: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  containerMessage: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 35,
  },
  textCall: {
    color: colors.white,
    fontSize: 16,
  },
  iconBottom: {
    marginTop: 2,
    color: colors.white,
    marginRight: 8,
  },
  circles: {
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -16,
  },
  whiteCircles: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.white,
    zIndex: 10,
  },
  photosNotFound: {
    overflow: 'hidden',
    height: 356,
    zIndex: 1,
  },
});
