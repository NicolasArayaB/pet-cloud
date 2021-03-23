"""empty message

Revision ID: b49f26f81a1b
Revises: b9d17f7a8a0b
Create Date: 2021-03-20 03:51:52.150904

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b49f26f81a1b'
down_revision = 'b9d17f7a8a0b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pet',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('chip_identifier', sa.String(length=50), nullable=True),
    sa.Column('nickname', sa.String(length=100), nullable=True),
    sa.Column('species', sa.String(length=100), nullable=True),
    sa.Column('breed', sa.String(length=100), nullable=True),
    sa.Column('gender', sa.String(length=100), nullable=True),
    sa.Column('pet_user_fk', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['pet_user_fk'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('pet')
    # ### end Alembic commands ###