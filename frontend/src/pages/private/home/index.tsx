import React, {
	createElement,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import {
	CommentIcon,
	HeartIcon,
	SendIcon,
	StarIcon,
} from '../../../components/icons';
import { Navbar } from '../../../components/navbar/navbar';
import { Post } from '../../../components/post/post';
import { useAuth } from '../../../utils/auth';
import './index.css';

export const HomePage = () => {
	const auth = useAuth();
	const getWrapper = useRef<HTMLDivElement>(null);
	const [feedArray, setFeedArray] = useState<[]>([]);

	const renderPost = (
		_author: {
			username: string;
			name: string;
			avatar: string;
		},
		_images: string,
		_caption: string,
		_likes: [],
		_comments: []
	) => {
		return (
			<div className="post">
				<div className="post__container">
					<div className="post__author">
						<div
							className="post__author__avatar"
							style={{
								background: `url("${_author.avatar}") center center / cover no-repeat`,
							}}
						></div>
						<div className="post__author__body">
							<div className="post__author__body__name">
								{_author.name === undefined ? (
									<Skeleton />
								) : _author.name === '' ? (
									_author.username
								) : (
									_author.name
								)}
							</div>
							<div className="post__author__body__username">
								{_author.username === undefined ? (
									<Skeleton />
								) : (
									'@' + _author.username
								)}
							</div>
						</div>
					</div>

					<div className="post__content">
						<div
							className="post__content-image"
							style={{
								backgroundImage: `url("${_images}")`,
							}}
						></div>
						<div className="post__content-action">
							<div className="post__content-action__icon">
								<HeartIcon />
							</div>
							<div className="post__content-action__wrapper">
								<div className="post__content-action__icon">
									<SendIcon />
								</div>
								<div className="post__content-action__icon">
									<CommentIcon />
								</div>
								<div className="post__content-action__icon">
									<StarIcon />
								</div>
							</div>
						</div>
					</div>

					<div className="post__content-text">
						<div className="post__content-text__likes">
							<div className="post__content-text__likes-amount">
								{_likes.length}
							</div>
							<div className="post__content-text__likes-text">
								Likes
							</div>
						</div>

						<div className="post__content-text__body">
							Next Project is coming soon, stay tuned!
						</div>

						<div className="post__content-text__time">
							2 Hours Ago
						</div>
					</div>
				</div>
			</div>
		);
	};

	useEffect(() => {
		auth?.requestFeed()
			.then((res: any) => {
				setFeedArray(res?.data.posts);
				console.log(res);
			})
			.catch((err: any) => {
				console.log(err);
			});

		document.title = 'Project Sylly - Home';
	}, []);

	return (
		<div className="home">
			<Navbar className="home--navbar" type="top" />

			<div className="home__wrapper" ref={getWrapper}>
				{feedArray.map((post: any) => {
					return renderPost(
						post.author,
						post.images,
						post.caption,
						post.likes,
						post.comments
					);
				})}
			</div>
		</div>
	);
};
