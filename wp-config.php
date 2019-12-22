<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6pgaI9lyyUEaTpUgUrrlnH6o7q92NfX2q/zhIKgrONC2SEaSrVKyShGcIKpsfGD9xakOmUmgBwkufQag4G2J+w==');
define('SECURE_AUTH_KEY',  'YrbjwXoVoDoUM0zxDrOeiJqjUK4CiNTU7E/K3hIeKnOnt5U5Va/bI+GjWFP/ztl3b1K3IFHZ6kqwAAH1WZudiQ==');
define('LOGGED_IN_KEY',    'qeorlxlut98Lmpda964pY4JmMf3b2Cr5bnI0y7RmmyS637Ei9UmJvHJd7/VA3s/kFTwvDqNTZ02XJYGxHUHWfQ==');
define('NONCE_KEY',        '5MO2m289c/wER6L2ow/j3kX5BdpYU9QqC7FWgC1SSjtce95BU07SMcpRjoR5B0xxEx2edASlAA+rFF0z9HNSDw==');
define('AUTH_SALT',        'phEjkhN6b2N5qvtq6hJCU0WoM2L+lwyl4wrzxlwN/JxECqNv7T7hSSoHgolSvK3UPlivuEHS0Iz5LHiy6KQUIg==');
define('SECURE_AUTH_SALT', '88Ia6ryB2GhlLQPKfDCTAZnBkUtY8Pb3O3QGVSj2Fm9nwlEKpaCq1EfuH39j0lp3NqQPoHi9mmytoy6A+HCbDQ==');
define('LOGGED_IN_SALT',   'IKKxMPKzrUI2DHTeNzdhuJ2AskdKxjANuOKCxbSY7d5g9qRq6btci+3I8CwM9zbydzEmuboK4wb6OZ++wRk6CQ==');
define('NONCE_SALT',       'lkpOZ6t3JHumxVfbnKCbvqe/rMdFVw/Gw4nky/KIaViGAmYbfePimt9e7dAX1uCPbm5CBbvpq3G/tBfVaKE0Ew==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
