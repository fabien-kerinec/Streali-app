import './chat-message.scss';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import { selectAnimation } from '~/utils/chat/animations';
import { Message } from './message';
import { Name } from './name';
import type { CSSProperties } from 'react';
import type { ChatTheme, TwitchMessage } from '~/types/schemas/chat';

export interface ChatMessageProps {
  settings: Omit<ChatTheme, 'user_id' | 'id'> | ChatTheme;
  message: TwitchMessage;
}

export const ChatMessage = memo(function ChatMessage(props: ChatMessageProps) {
  const { settings, message } = props;

  const containerStyle: CSSProperties = {
    flexDirection: settings.global.layout === 'stack' ? 'column' : 'row',
    alignItems:
      settings.global.alignment === 'left'
        ? 'flex-start'
        : settings.global.alignment === 'right'
        ? 'flex-end'
        : ('center' as 'flex-start' | 'flex-end' | 'center'),
    marginBottom: settings.global.space_between_messages + 'px',
  };

  return (
    <motion.div
      animate={selectAnimation(settings.global.animation).animate}
      initial={selectAnimation(settings.global.animation).initial}
      transition={selectAnimation(settings.global.animation).transition}
      className="flex w-full"
      style={containerStyle}
    >
      {settings.global.order.map((item, index) => (
        <Fragment key={index}>
          {item.id === 'name' && (
            <Name
              key={item.id}
              settings={settings.name}
              name={message.username}
              badges={message.badges}
            />
          )}
          {item.id === 'message' && (
            <Message key={item.id} settings={settings.message} message={message.message} />
          )}
        </Fragment>
      ))}
    </motion.div>
  );
});
