import { Notification } from '../../../src';

describe('Notification', () => {
  it('Test the default props and node.', () => {
    Notification({
      message: 'title',
      description: '描述',
    });
    expect(document.querySelectorAll('.is-notification')[0].className).toBe('is-animate is-fadeIn is-right is-mounting w-alert w-alert-default w-alert-icon-description w-notification');
    expect(document.querySelectorAll('.is-message').length).toBe(0);
  });

  it('test 4 type', () => {
    const openNotificationWithIcon = (type) => {
      const iconPrefix = '.is-alert';
      Notification[type]({
        message: 'Notification Title',
        duration: 0,
        description: 'This is the content of the notification.',
      });
      expect(document.querySelectorAll(`${iconPrefix}-${type}`).length).toBe(1);
    };
    ['success', 'info', 'warning', 'error'].forEach((type) => {
      openNotificationWithIcon(type);
    });
  });
});
